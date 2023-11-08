import { PartialType } from '@nestjs/mapped-types';
import { CreateEstabelecimentoDto } from './create-estabelecimento.dto';
import { IsNumber, IsString, MaxLength, Min } from 'class-validator';

export class UpdateEstabelecimentoDto extends PartialType(
  CreateEstabelecimentoDto,
) {
  @MaxLength(255)
  @IsString()
  nome: string;

  @Min(0)
  @IsNumber()
  frete: number;
}
