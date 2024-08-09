import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/users')
export class UserController {

  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  index() {
    return this.userService.index();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:userId')
  show(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
   return this.userService.delete(userId)
  }
}