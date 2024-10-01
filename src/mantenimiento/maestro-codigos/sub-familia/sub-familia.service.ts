import { Injectable } from '@nestjs/common';
import { CreateSubFamiliaDto } from './dto/create-sub-familia.dto';
import { UpdateSubFamiliaDto } from './dto/update-sub-familia.dto';

@Injectable()
export class SubFamiliaService {
  create(createSubFamiliaDto: CreateSubFamiliaDto) {
    return 'This action adds a new subFamilia';
  }

  findAll() {
    return `This action returns all subFamilia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subFamilia`;
  }

  update(id: number, updateSubFamiliaDto: UpdateSubFamiliaDto) {
    return `This action updates a #${id} subFamilia`;
  }

  remove(id: number) {
    return `This action removes a #${id} subFamilia`;
  }
}
