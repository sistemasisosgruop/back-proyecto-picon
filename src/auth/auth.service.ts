import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { jwtConstant } from 'src/common/constants/jwt.constant';
import { LoginAuthDto } from './dto/login-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { PersonalService } from 'src/personal/personal.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private prisma: PrismaService,
    private mailService: MailService,
    private personalService: PersonalService,
  ) {}
  async validateUser(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstant.secret,
      });
      return payload;
    } catch (error) {
      throw new UnauthorizedException('No Autorizadoo!.');
    }
  }

  async login(loginAuthDto: LoginAuthDto) {
    const personal = await this.personalService.findOneByEmail(loginAuthDto.email);
    // const userDni = await this.userService.findOneByDNI(dni);
    if (!personal) {
      throw new UnauthorizedException('Credenciales invalidas.');
    }

    const isPasswordValid = await bcryptjs.compare(loginAuthDto.password, personal.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales invalidas.');
    }

    const payload = {
      email: personal.email,
      id: personal.id,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: personal.email,
      id: personal.id,
    };
  }

  async requestPasswordReset(email: string) {
    const user = await this.prisma.personal.findUnique({ where: { email } });
    if (!user) {
      throw new BadRequestException('User with this email does not exist');
    }

    // Generar un token de recuperación (válido por 1 hora)
    const payload = { id: user.id, email: user.email };
    const token = this.jwtService.sign(payload, {
      secret: jwtConstant.secret,
      expiresIn: '1h',
    });

    try {
      // Guardar token en la base de datos
      await this.prisma.personal.update({
        where: { id: user.id },
        data: { resetPasswordToken: token },
      });

      // Enviar correo electrónico con el enlace de recuperación
      await this.mailService.sendPasswordResetMail(user.email, token);
    } catch (error) {
      throw new BadRequestException('No se pudo generar token de recuperación.');
    }
  }
}
