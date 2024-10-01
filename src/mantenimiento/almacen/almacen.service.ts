import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateMessage } from 'src/helpers/message.helper';
import { ENTITY, FIELDS, VALIDATIONS } from 'src/common/constants/messages.constant';

@Injectable()
export class AlmacenService {
  constructor(private prisma: PrismaService) {}
  async create(createAlmacenDto: CreateAlmacenDto) {
    const validarEmpresaId = await this.prisma.empresa.findUnique({
      where: { id: createAlmacenDto.empresaId },
    });
    if (!validarEmpresaId)
      throw new UnprocessableEntityException(
        generateMessage(FIELDS.ID.concat(' ', ENTITY.EMPRESA), VALIDATIONS.ERRORS.NOT_FOUND),
      );

    const almacen = await this.prisma.almacen.create({
      data: {
        direccion: createAlmacenDto.direccion,
        nombre: createAlmacenDto.nombre,
        telefono: createAlmacenDto.telefono,
        empresaId: createAlmacenDto.empresaId,
      },
    });

    const almacenUpdate = await this.prisma.almacen.update({
      where: {
        id: almacen.id,
      },
      data: {
        codigo: this.generateCodeAlmacen(almacen.id),
      },
    });
    return almacenUpdate;
  }

  async findAll() {
    return await this.prisma.almacen.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} almacen`;
  }

  async update(id: number, updateAlmacenDto: UpdateAlmacenDto) {
    return await this.prisma.almacen.update({
      data: {
        direccion: updateAlmacenDto.direccion,
        nombre: updateAlmacenDto.nombre,
        telefono: updateAlmacenDto.telefono,
        empresaId: updateAlmacenDto.empresaId,
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} almacen`;
  }

  generateCodeAlmacen(number: number) {
    const currentNumber = Number(number);
    if (currentNumber < 10) {
      return `ALM-00${currentNumber}`;
    }

    if (currentNumber >= 10 && currentNumber < 100) {
      return `ALM-0${currentNumber}`;
    }

    return `ALM-${currentNumber}`;
  }
}
