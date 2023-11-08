import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAuthDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  credencial: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  senha: string;
}
