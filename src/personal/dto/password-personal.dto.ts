import { IsNotEmpty, IsNumber, IsString, Matches, MinLength } from 'class-validator';

export class updatePasswordDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password debe ser 6 caracteres como minimo.' })
  // @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/, {
  //   message:
  //     'Password must contain at least one letter, one number, and be at least 6 characters long',
  // })
  password: string;
  @IsNotEmpty()
  @IsString()
  repeatPassword: string;
}
