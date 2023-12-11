import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAdminDto {
  @MaxLength(255)
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  credential: string;

  @MaxLength(255)
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
