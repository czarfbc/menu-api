import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEstabelecimentoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nome: string;

  credencial: string;
  senha: string;
  frete: number;
}
