import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { updatePasswordDto } from './dto/password-personal.dto';
import * as bcryptjs from 'bcryptjs';
import { generateMessage } from 'src/helpers/message.helper';
import { ACTIONS, ENTITY, FIELDS, VALIDATIONS } from 'src/common/constants/messages.constant';

@Injectable()
export class PersonalService {
  constructor(private prisma: PrismaService) {}
  async create(personalDto: CreatePersonalDto) {
    const validateEmail = await this.prisma.personal.findFirst({
      where: { email: personalDto.email },
    });

    if (validateEmail) {
      throw new ConflictException(generateMessage(FIELDS.EMAIL, VALIDATIONS.ERRORS.ALREADY_EXISTS));
    }

    await this.prisma.personal.create({
      data: {
        codigo: personalDto.codigo,
        nombre: personalDto.nombre,
        email: personalDto.email,
        telefono: personalDto.telefono,
        puesto: personalDto.puesto,
        activo: personalDto.activo,
        direccion: personalDto.direccion,
      },
    });
    return generateMessage(ENTITY.PERSONAL, ACTIONS.CREATED);
  }

  async update(idPersonal: number, personalDto: UpdatePersonalDto) {
    const validateEmail = await this.prisma.personal.findFirst({
      where: { email: personalDto.email, id: { not: idPersonal } },
    });
    const validateCodigo = await this.prisma.personal.findFirst({
      where: { email: personalDto.codigo, id: { not: idPersonal } },
    });
    if (validateEmail) {
      throw new ConflictException(generateMessage(FIELDS.EMAIL, VALIDATIONS.ERRORS.ALREADY_EXISTS));
    }
    if (validateCodigo) {
      throw new ConflictException(
        generateMessage(FIELDS.CODIGO, VALIDATIONS.ERRORS.ALREADY_EXISTS),
      );
    }
    await this.prisma.personal.update({
      data: {
        codigo: personalDto.codigo,
        nombre: personalDto.nombre,
        email: personalDto.email,
        telefono: personalDto.telefono,
        puesto: personalDto.puesto,
        activo: personalDto.activo,
        direccion: personalDto.direccion,
      },
      where: { id: idPersonal },
    });

    return generateMessage(ENTITY.PERSONAL, ACTIONS.UPDATED);
  }
  async updatePassword(idPersonal: number, passwordDto: updatePasswordDto): Promise<void> {
    // Verificar si las contraseñas coinciden
    const validatePersonal = await this.prisma.personal.findUnique({
      where: { id: idPersonal },
    });
    if (!validatePersonal) {
      throw new BadRequestException('Id Personal no existe.');
    }
    if (passwordDto.password !== passwordDto.repeatPassword) {
      throw new BadRequestException('Los Passwords deben de ser iguales');
    }

    // Encriptar la contraseña
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(passwordDto.password, salt);

    // Actualizar la contraseña en la base de datos
    await this.prisma.personal.update({
      where: { id: idPersonal },
      data: { password: hashedPassword },
    });
  }

  async findAll() {
    return await this.prisma.personal.findMany({
      select: {
        id: true,
        codigo: true,
        nombre: true,
        email: true,
        telefono: true,
        puesto: true,
        activo: true,
        direccion: true,
        fechaCreacion: true,
        fechaEdicion: true,
      },
    });
  }
  async findOneByEmail(email: string) {
    return await this.prisma.personal.findFirst({ where: { email: email } });
  }
  findOne(id: number) {
    return `This action returns a #${id} personal`;
  }

  remove(id: number) {
    return `This action removes a #${id} personal`;
  }
}
