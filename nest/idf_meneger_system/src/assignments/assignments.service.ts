import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Assignment } from './assignment.model';
import { UsersService } from '../users/users.service';
import { ShiftsService } from '../shifts/shifts.service';
import { Shift } from '../shifts/shift.model';
import { User } from '../users/user.model';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(Assignment) private assignmentModel: typeof Assignment,
    private users: UsersService,
    private shifts: ShiftsService,
  ) {}

  async create(userId: number, shiftId: number) {
    // וידוא שהמשתמש והשמירה קיימים
    await this.users.findById(userId);
    await this.shifts.getById(shiftId);

    // דוגמה לחוק בסיסי: לא לשבץ אותו לשמירה שכבר משובץ אליה
    const exists = await this.assignmentModel.findOne({
      where: { userId, shiftId },
    });
    if (exists)
      throw new BadRequestException('User already assigned to this shift');

    return this.assignmentModel.create({ userId, shiftId } as any);
  }

  async listAllForCommander() {
    return this.assignmentModel.findAll({ include: [User, Shift] });
  }

  async listMine(userId: number) {
    return this.assignmentModel.findAll({
      where: { userId },
      include: [Shift],
    });
  }
}
