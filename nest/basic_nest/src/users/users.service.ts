import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }
  async findOneByID(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  create(name: string, email: string) {
    return this.prisma.user.create({ data: { name, email } });
  }
  updateUser(id: number, name: string, email: string) {
    return this.prisma.user.update({
      where: { id },
      data: { name, email },
    });
  }
  deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
