import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from '../common/decorators/roles.decorator';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(params: {
    name: string;
    email: string;
    passwordHash: string;
    role: Role;
  }) {
    try {
      return await this.userModel.create(params as any);
    } catch (e) {
      throw new BadRequestException('Email already exists or invalid data');
    }
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  async findById(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async listAll() {
    return this.userModel.findAll({
      attributes: ['id', 'name', 'email', 'role'],
    });
  }
}
