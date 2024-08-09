import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtStrategy],
  exports: [UserService]
})
export class UserModule{}
