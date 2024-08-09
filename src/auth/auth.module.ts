import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';

@Module({
  controllers: [AuthController],
  imports: [UserModule, JwtModule.register({
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: '6000s' },
  })],
  providers: [AuthService],
})
export class AuthModule {
}
