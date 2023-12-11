import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
