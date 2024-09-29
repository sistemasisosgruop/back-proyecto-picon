import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePersonalDto {
  @ApiProperty({ description: 'Codigo personal' })
  @IsOptional()
  @IsString()
  codigo: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsOptional()
  @IsString()
  puesto: string;

  @IsNotEmpty()
  @IsBoolean()
  activo: boolean;

  @IsNotEmpty()
  @IsString()
  direccion: string;
}
