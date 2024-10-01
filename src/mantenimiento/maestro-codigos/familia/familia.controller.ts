import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FamiliaService } from './familia.service';
import { CreateFamiliaDto } from './dto/create-familia.dto';
import { UpdateFamiliaDto } from './dto/update-familia.dto';

@Controller('familia')
export class FamiliaController {
  constructor(private readonly familiaService: FamiliaService) {}

  @Post()
  async create(@Body() createFamiliaDto: CreateFamiliaDto, @Query() empresaId: string) {
    return await this.familiaService.create(createFamiliaDto, +empresaId);
  }

  @Get()
  findAll() {
    return this.familiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFamiliaDto: UpdateFamiliaDto) {
    return this.familiaService.update(+id, updateFamiliaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiaService.remove(+id);
  }
}
