import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { Role } from '../common/decorators/roles.decorator';

@Injectable()
export class AuthService {
  constructor(
    private users: UsersService,
    private jwt: JwtService,
  ) {}

  async register(data: {
    name: string;
    email: string;
    password: string;
    role: Role;
  }) {
    const exists = await this.users.findByEmail(data.email);
    if (exists) throw new BadRequestException('Email already registered');

    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await this.users.createUser({
      name: data.name,
      email: data.email,
      passwordHash,
      role: data.role,
    });

    return { id: user.id, name: user.name, email: user.email, role: user.role };
  }

  async login(data: { email: string; password: string }) {
    const user = await this.users.findByEmail(data.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(data.password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const token = await this.jwt.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    return { token };
  }
}
