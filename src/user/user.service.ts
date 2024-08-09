import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {
  }

  async show(id: number) {
    try {
      return await this.prisma.user.findFirst({
        where: {
          id: id,
        },
      });
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async findByEmail(email: string) {
    try {
      return await this.prisma.user.findFirst({
        where: {
          email: email,
        },
      });
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async create(body: CreateUserDto) {
    try {
      return await this.prisma.user.create({
        data: body,
      });
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async index() {
    try {
      return await this.prisma.user.findMany({});
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }

  async delete(id) {
    try {
      return await this.prisma.user.delete({
        where: { id: Number(id) },
      });
    } catch (e) {
      throw new HttpException(e.message, 500);
    }
  }
}
