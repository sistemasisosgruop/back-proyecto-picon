import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateMessage } from 'src/helpers/message.helper';
import { FIELDS, VALIDATIONS } from 'src/common/constants/messages.constant';

@Injectable()
export class SucursalService {
  constructor(private prisma: PrismaService) {}
  async create(createSucursalDto: CreateSucursalDto) {
    const validarNombre = await this.prisma.sucursal.findFirst({
      where: { nombre: createSucursalDto.nombre },
    });
    if (validarNombre)
      throw new ConflictException(generateMessage(FIELDS.NAME, VALIDATIONS.ERRORS.ALREADY_EXISTS));
    const sucursal = await this.prisma.sucursal.create({
      data: {
        nombre: createSucursalDto.nombre,
        direccion: createSucursalDto.direccion,
        telefono: createSucursalDto.telefono,
        email: createSucursalDto.email,
        empresaId: createSucursalDto.empresaId,
      },
    });

    const updateSucursal = await this.prisma.sucursal.update({
      where: {
        id: sucursal.id,
      },
      data: {
        codigo: this.generateCode(sucursal.id),
      },
    });
    return updateSucursal;
  }

  async findAll() {
    return await this.prisma.sucursal.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} sucursal`;
  }

  async update(id: number, updateSucursalDto: UpdateSucursalDto) {
    const validarNombre = await this.prisma.sucursal.findFirst({
      where: { nombre: updateSucursalDto.nombre },
    });
    if (validarNombre)
      throw new ConflictException(generateMessage(FIELDS.NAME, VALIDATIONS.ERRORS.ALREADY_EXISTS));

    const updateSucursal = await this.prisma.sucursal.create({
      data: {
        nombre: updateSucursalDto.nombre,
        direccion: updateSucursalDto.direccion,
        telefono: updateSucursalDto.telefono,
        email: updateSucursalDto.email,
        empresaId: updateSucursalDto.empresaId,
      },
    });
    return updateSucursal;
  }

  remove(id: number) {
    return `This action removes a #${id} sucursal`;
  }

  generateCode(number: number) {
    const currentNumber = String(number);
    return currentNumber.padStart(4, '0');
  }
}
