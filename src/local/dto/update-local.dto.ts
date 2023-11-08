import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalDto } from './create-local.dto';
import { IsNumber, IsString, MaxLength, Min } from 'class-validator';

export class UpdateLocalDto extends PartialType(CreateLocalDto) {
  @MaxLength(255)
  @IsString()
  nome: string;

  @Min(0)
  @IsNumber()
  frete: number;
}
