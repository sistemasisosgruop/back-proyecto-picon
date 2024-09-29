import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from 'src/common/constants/jwt.constant';
import { MailService } from 'src/mail/mail.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PersonalService } from 'src/personal/personal.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, MailService, PersonalService],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
