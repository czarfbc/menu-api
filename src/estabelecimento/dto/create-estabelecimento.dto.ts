import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEstabelecimentoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nome: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  credencial: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  senha: string;

  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  frete: number;
}
