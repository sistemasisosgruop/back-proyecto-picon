import { Injectable } from '@nestjs/common';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { UpdateFamiliaDto } from './dto/update-familia.dto';

@Injectable()
export class FamiliaService {
  async create(createFamiliaDto: CreateFamiliaDto, empresaId: number) {
    return 'This action adds a new familia';
  }

  findAll() {
    return `This action returns all familia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familia`;
  }

  update(id: number, updateFamiliaDto: UpdateFamiliaDto) {
    return `This action updates a #${id} familia`;
  }

  remove(id: number) {
    return `This action removes a #${id} familia`;
  }
}
