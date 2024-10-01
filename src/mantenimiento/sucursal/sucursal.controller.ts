import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Controller('sucursal')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}

  @Post()
  async create(@Body() createSucursalDto: CreateSucursalDto) {
    return await this.sucursalService.create(createSucursalDto);
  }

  @Get()
  async findAll() {
    return await this.sucursalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sucursalService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSucursalDto: UpdateSucursalDto) {
    return await this.sucursalService.update(+id, updateSucursalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sucursalService.remove(+id);
  }
}
