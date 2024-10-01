import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  ruc: string;
  @IsNotEmpty()
  @IsString()
  direccion: string;
  @IsNotEmpty()
  @IsString()
  telefono: string;
  @IsOptional()
  @IsString()
  email: string;
  @IsOptional()
  @IsString()
  web: string;
  @IsOptional()
  @IsString()
  logo: string;
}
