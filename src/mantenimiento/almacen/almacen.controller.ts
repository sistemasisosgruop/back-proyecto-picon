import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlmacenService } from './almacen.service';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService: AlmacenService) {}

  @Post()
  async create(@Body() createAlmacenDto: CreateAlmacenDto) {
    return await this.almacenService.create(createAlmacenDto);
  }

  @Get()
  async findAll() {
    return await this.almacenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.almacenService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAlmacenDto: UpdateAlmacenDto) {
    return await this.almacenService.update(+id, updateAlmacenDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.almacenService.remove(+id);
  }
}
