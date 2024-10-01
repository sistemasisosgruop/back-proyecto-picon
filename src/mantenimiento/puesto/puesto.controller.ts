import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PuestoService } from './puesto.service';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';

@Controller('puesto')
export class PuestoController {
  constructor(private readonly puestoService: PuestoService) {}

  @Post()
  async create(@Body() createPuestoDto: CreatePuestoDto) {
    return await this.puestoService.create(createPuestoDto);
  }

  @Get()
  async findAll() {
    return await this.puestoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.puestoService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePuestoDto: UpdatePuestoDto) {
    return await this.puestoService.update(+id, updatePuestoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.puestoService.remove(+id);
  }
}
