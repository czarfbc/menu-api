import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(createAdminDto: CreateAdminDto) {
    const passwordHash = await bcrypt.hash(createAdminDto.password, 10);

    const result = await this.prisma.admin.create({
      data: { ...createAdminDto, password: passwordHash },
    });

    return result;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const passwordHash = await bcrypt.hash(updateAdminDto.password, 10);

    const result = await this.prisma.admin.update({
      where: { id },
      data: { ...updateAdminDto, password: passwordHash },
    });

    return result;
  }

  async remove(id: number) {
    const result = await this.prisma.admin.delete({
      where: { id },
    });

    return result;
  }
}
