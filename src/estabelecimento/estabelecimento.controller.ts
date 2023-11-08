import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EstabelecimentoService } from './estabelecimento.service';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';

@Controller('estabelecimento')
export class EstabelecimentoController {
  constructor(
    private readonly estabelecimentoService: EstabelecimentoService,
  ) {}

  @Post()
  create(@Body() createEstabelecimentoDto: CreateEstabelecimentoDto) {
    return this.estabelecimentoService.create(createEstabelecimentoDto);
  }

  @Get()
  findAll() {
    return this.estabelecimentoService.findAll();
  }

  @Get('credential/:credencial')
  findOneByCredential(@Param('credencial') credencial: string) {
    return this.estabelecimentoService.findOneByCredential(credencial);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.estabelecimentoService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstabelecimentoDto: UpdateEstabelecimentoDto,
  ) {
    return this.estabelecimentoService.update(id, updateEstabelecimentoDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estabelecimentoService.remove(id);
  }
}
