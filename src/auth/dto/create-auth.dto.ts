import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAuthDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  credential: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  password: string;
}
