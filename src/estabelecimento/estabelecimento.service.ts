import { Injectable } from '@nestjs/common';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EstabelecimentoService {
  constructor(private prisma: PrismaService) {}

  async create(createEstabelecimentoDto: CreateEstabelecimentoDto) {
    const senhaHash = await bcrypt.hash(createEstabelecimentoDto.senha, 10);

    const resultCreate = await this.prisma.estabelecimento.create({
      data: { ...createEstabelecimentoDto, senha: senhaHash },
    });
    return resultCreate;
  }

  findAll() {
    return `This action returns all estabelecimento`;
  }

  findOne(id: string) {
    return `This action returns a #${id} estabelecimento`;
  }

  async update(id: string, updateEstabelecimentoDto: UpdateEstabelecimentoDto) {
    const resultUpdate = await this.prisma.estabelecimento.update({
      where: { id },
      data: { ...updateEstabelecimentoDto },
    });
    return resultUpdate;
  }

  async remove(id: string) {
    const resultRemove = await this.prisma.estabelecimento.delete({
      where: { id },
    });
    return resultRemove;
  }
}
