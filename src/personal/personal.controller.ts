import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { Public } from 'src/common/decorators/auth.decorator';
import { updatePasswordDto } from './dto/password-personal.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('personal')
@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  // @Post('login')
  // login(@Body() createPersonalDto: CreatePersonalDto) {
  //   return this.personalService.create(createPersonalDto);
  // }

  @Post()
  @Public()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'El personal ha sido creado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @HttpCode(201)
  async create(@Body() createPersonalDto: CreatePersonalDto) {
    return await this.personalService.create(createPersonalDto);
  }

  @Patch(':id')
  async updatePassword(@Param('id') id: string, @Body() passwordDto: updatePasswordDto) {
    return await this.personalService.updatePassword(+id, passwordDto);
  }

  @Get()
  async findAll() {
    return await this.personalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.personalService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePersonalDto: UpdatePersonalDto) {
    return await this.personalService.update(+id, updatePersonalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalService.remove(+id);
  }
}
