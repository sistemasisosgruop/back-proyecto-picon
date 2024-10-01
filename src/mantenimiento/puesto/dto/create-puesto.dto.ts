import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreatePuestoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string
    @IsNotEmpty()
    @IsBoolean()
    activo: boolean
}
