import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EstabelecimentoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
