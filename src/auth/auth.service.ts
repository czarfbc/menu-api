import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { EstabelecimentoService } from 'src/estabelecimento/estabelecimento.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: CreateAuthDto) {
    const findOneByCredential =
      await this.estabelecimentoService.findOneByCredential(
        createAuthDto.credencial,
      );

    const passwordMatch = await compare(
      createAuthDto.senha,
      findOneByCredential.senha,
    );
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: findOneByCredential.id,
      credencial: findOneByCredential.credencial,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      estabelecimento: {
        id: findOneByCredential.id,
        nome: findOneByCredential.nome,
        credencial: findOneByCredential.credencial,
        frete: findOneByCredential.frete,
      },
    };
  }
}
