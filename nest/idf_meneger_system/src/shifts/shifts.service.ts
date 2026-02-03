import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './shift.model';

@Injectable()
export class ShiftsService {
  constructor(@InjectModel(Shift) private shiftModel: typeof Shift) {}

  async create(data: { startTime: Date; endTime: Date; location: string }) {
    if (data.endTime <= data.startTime) {
      throw new BadRequestException('endTime must be after startTime');
    }
    return this.shiftModel.create(data as any);
  }

  async listAll() {
    return this.shiftModel.findAll();
  }

  async getById(id: number) {
    const shift = await this.shiftModel.findByPk(id);
    if (!shift) throw new NotFoundException('Shift not found');
    return shift;
  }
}
