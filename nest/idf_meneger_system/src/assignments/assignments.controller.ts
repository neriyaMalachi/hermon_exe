import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('assignments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AssignmentsController {
  constructor(private assignments: AssignmentsService) {}

  // מפקד רואה הכל
  @Get()
  @Roles('commander')
  listAll() {
    return this.assignments.listAllForCommander();
  }

  // חייל רואה רק שלו
  @Get('me')
  @Roles('soldier', 'commander') // גם מפקד יכול לראות "שלי"
  listMine(@Req() req: any) {
    return this.assignments.listMine(req.user.id);
  }

  // יצירת הקצאה - מפקד בלבד
  @Post()
  @Roles('commander')
  create(@Body() dto: CreateAssignmentDto) {
    return this.assignments.create(dto.userId, dto.shiftId);
  }
}
