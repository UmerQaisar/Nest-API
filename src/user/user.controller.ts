import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  index() {
    return this.userService.index();
  }

  @Get('/:userId')
  show(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
   return this.userService.delete(userId)
  }
}