import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubFamiliaService } from './sub-familia.service';
import { CreateSubFamiliaDto } from './dto/create-sub-familia.dto';
import { UpdateSubFamiliaDto } from './dto/update-sub-familia.dto';

@Controller('sub-familia')
export class SubFamiliaController {
  constructor(private readonly subFamiliaService: SubFamiliaService) {}

  @Post()
  create(@Body() createSubFamiliaDto: CreateSubFamiliaDto) {
    return this.subFamiliaService.create(createSubFamiliaDto);
  }

  @Get()
  findAll() {
    return this.subFamiliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subFamiliaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubFamiliaDto: UpdateSubFamiliaDto) {
    return this.subFamiliaService.update(+id, updateSubFamiliaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subFamiliaService.remove(+id);
  }
}
