import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from './dto/create-shift.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('shifts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ShiftsController {
  constructor(private shifts: ShiftsService) {}

  @Get()
  list() {
    return this.shifts.listAll();
  }

  @Post()
  @Roles('commander')
  create(@Body() dto: CreateShiftDto) {
    return this.shifts.create({
      startTime: new Date(dto.startTime),
      endTime: new Date(dto.endTime),
      location: dto.location,
    });
  }
}
