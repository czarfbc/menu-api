import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstabelecimentoModule } from './estabelecimento/estabelecimento.module';

@Module({
  imports: [EstabelecimentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
