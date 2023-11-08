import { Module } from '@nestjs/common';
import { EstabelecimentoService } from './estabelecimento.service';
import { EstabelecimentoController } from './estabelecimento.controller';

@Module({
  controllers: [EstabelecimentoController],
  providers: [EstabelecimentoService],
  exports: [EstabelecimentoService],
})
export class EstabelecimentoModule {}
