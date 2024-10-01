import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  async create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return await this.empresaService.create(createEmpresaDto);
  }

  @Get()
  async findAll() {
    return await this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return await this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.empresaService.remove(+id);
  }
}
