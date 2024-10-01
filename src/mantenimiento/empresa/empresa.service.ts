import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateMessage } from 'src/helpers/message.helper';
import { FIELDS, VALIDATIONS } from 'src/common/constants/messages.constant';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}
  async create(createEmpresaDto: CreateEmpresaDto) {
    const validarNombre = await this.prisma.empresa.findFirst({
      where: { nombre: createEmpresaDto.nombre.toUpperCase() },
    });
    if (validarNombre)
      throw new ConflictException(generateMessage(FIELDS.NAME, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    const validarRuc = await this.prisma.empresa.findFirst({
      where: { ruc: createEmpresaDto.ruc.toUpperCase() },
    });
    if (validarRuc)
      throw new ConflictException(generateMessage(FIELDS.RUC, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    const validarEmail = await this.prisma.empresa.findFirst({
      where: { email: createEmpresaDto.email.toUpperCase() },
    });
    if (validarEmail)
      throw new ConflictException(generateMessage(FIELDS.EMAIL, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    return await this.prisma.empresa.create({
      data: {
        nombre: createEmpresaDto.nombre,
        ruc: createEmpresaDto.ruc,
        direccion: createEmpresaDto.direccion,
        telefono: createEmpresaDto.telefono,
        email: createEmpresaDto.email,
        web: createEmpresaDto.web,
        logo: createEmpresaDto.logo,
      },
    });
  }

  async findAll() {
    return await this.prisma.empresa.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    const validarNombre = await this.prisma.empresa.findFirst({
      where: { nombre: updateEmpresaDto.nombre.toUpperCase(), id: { not: id } },
    });
    if (validarNombre)
      throw new ConflictException(generateMessage(FIELDS.NAME, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    const validarRuc = await this.prisma.empresa.findFirst({
      where: { ruc: updateEmpresaDto.ruc.toUpperCase(), id: { not: id } },
    });
    if (validarRuc)
      throw new ConflictException(generateMessage(FIELDS.RUC, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    const validarEmail = await this.prisma.empresa.findFirst({
      where: { email: updateEmpresaDto.email.toUpperCase(), id: { not: id } },
    });
    if (validarEmail)
      throw new ConflictException(generateMessage(FIELDS.EMAIL, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    return await this.prisma.empresa.update({
      data: {
        nombre: updateEmpresaDto.nombre.toUpperCase(),
        ruc: updateEmpresaDto.ruc.toUpperCase(),
        direccion: updateEmpresaDto.direccion,
        telefono: updateEmpresaDto.telefono,
        email: updateEmpresaDto.email.toUpperCase(),
        web: updateEmpresaDto.web,
        logo: updateEmpresaDto.logo,
      },
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.prisma.empresa.update({ data: { activo: false }, where: { id } });
  }
}
