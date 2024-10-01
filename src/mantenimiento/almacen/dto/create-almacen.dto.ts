import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAlmacenDto {
  @IsNotEmpty()
  @IsString()
  direccion: string;
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  telefono: string;
  @IsNotEmpty()
  @IsNumber()
  empresaId: number;
}
