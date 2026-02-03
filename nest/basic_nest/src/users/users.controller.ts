import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneByID(@Param('id') id: string) {
    return this.userService.findOneByID(Number(id));
  }
  @Post('add')
  create(@Body() body: { name: string; email: string }) {
    return this.userService.create(body.name, body.email);
  }
  @Put('edit')
  updateUser(@Body() body: { id: number; name: string; email: string }) {
    return this.userService.updateUser(body.id, body.name, body.email);
  }
  @Delete('delete/:id')
  deletUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
