import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LocalService } from 'src/local/local.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private localService: LocalService,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: CreateAuthDto) {
    const findOneByCredential = await this.localService.findOneByCredential(
      createAuthDto.credential,
    );

    const passwordMatch = await compare(
      createAuthDto.password,
      findOneByCredential.password,
    );
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: findOneByCredential.id,
      credential: findOneByCredential.credential,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      estabelecimento: {
        id: findOneByCredential.id,
        name: findOneByCredential.name,
        credential: findOneByCredential.credential,
        freigt: findOneByCredential.freigt,
      },
    };
  }
}
