import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalService {
  constructor(private prisma: PrismaService) {}

  async create(createLocalDto: CreateLocalDto) {
    const passwordHash = await bcrypt.hash(createLocalDto.password, 10);

    const resultCreate = await this.prisma.local.create({
      data: { ...createLocalDto, password: passwordHash },
    });
    return resultCreate;
  }

  findAll() {
    return `This action returns all estabelecimento`;
  }

  async findOneByCredential(credential: string) {
    const resultFindOneByCredential = await this.prisma.local.findUniqueOrThrow(
      {
        where: { credential },
      },
    );
    return resultFindOneByCredential;
  }

  findOneById(id: string) {
    return `This action returns a #${id} estabelecimentoss`;
  }

  async update(id: string, updateLocalDto: UpdateLocalDto) {
    const resultUpdate = await this.prisma.local.update({
      where: { id },
      data: { ...updateLocalDto },
    });
    return resultUpdate;
  }

  async remove(id: string) {
    const resultRemove = await this.prisma.local.delete({
      where: { id },
    });
    return resultRemove;
  }
}
