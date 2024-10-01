import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateMessage } from 'src/helpers/message.helper';
import { ACTIONS, ENTITY, FIELDS, VALIDATIONS } from 'src/common/constants/messages.constant';

@Injectable()
export class PuestoService {
  constructor(private prisma: PrismaService) {}
  async create(createPuestoDto: CreatePuestoDto) {
    const validarNombre = await this.prisma.puesto.findFirst({
      where: { nombre: createPuestoDto.nombre },
    });
    if (validarNombre) {
      throw new UnprocessableEntityException(
        generateMessage(FIELDS.NAME, VALIDATIONS.ERRORS.ALREADY_EXISTS),
      );
    }
    await this.prisma.puesto.create({
      data: {
        nombre: createPuestoDto.nombre.toUpperCase(),
        activo: createPuestoDto.activo,
      },
    });
    return generateMessage(ENTITY.PUESTO, ACTIONS.CREATED);
  }

  async findAll() {
    return await this.prisma.puesto.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} puesto`;
  }

  async update(id: number, updatePuestoDto: UpdatePuestoDto) {
    const validarNombre = await this.prisma.puesto.findFirst({
      where: { nombre: updatePuestoDto.nombre, id: { not: id } },
    });
    if (validarNombre) {
      throw new UnprocessableEntityException(
        generateMessage(ENTITY.PUESTO, VALIDATIONS.ERRORS.ALREADY_EXISTS),
      );
    }
    await this.prisma.puesto.update({
      data: { nombre: updatePuestoDto.nombre.toUpperCase(), activo: updatePuestoDto.activo },
      where: { id: id },
    });
    return generateMessage(ENTITY.PUESTO, ACTIONS.UPDATED);
  }

  async remove(id: number) {
    await this.prisma.puesto.update({ data: { activo: true }, where: { id } });
    return generateMessage(ENTITY.PUESTO, ACTIONS.DELETED);
  }
}
