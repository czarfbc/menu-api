import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateLocalDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  credential: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  freigt: number;
}
