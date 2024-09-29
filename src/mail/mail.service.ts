import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(
    to: string[],
    usuario: { nombres: string; apellidos: string },
    tipo: string,
  ): Promise<void> {
    const mailOptions = {
      from: `${process.env.SMTP_USER}`,
      to: to.join(', '),
      subject: 'Solicitud Reinicio de Password',
      text: `Hola, el sistema de Notificaciones Logistic informa que el usuario ${usuario.nombres} ${usuario.apellidos} acaba de realizar una solicitud de (${tipo}).`,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendPasswordResetMail(email: string, token: string) {
    const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;
    const mailOptions = {
      from: '"Support" <your-email@example.com>',
      to: email,
      subject: 'PICON: Solicitud de Reinicio de Password',
      text: `Ingresa al siguiente link para reiniciar tu password: ${resetLink}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
