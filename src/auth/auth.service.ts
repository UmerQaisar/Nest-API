import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
  }

  async login(loginDto: any) {
    const { email, password } = loginDto;
    const user = await this.userService.findByEmail(email);
    if (user && password === user.password) {
      const payload = { username: user.name, sub: user.id };
      return {
        token: this.jwtService.sign(payload),
      };
    }
    return 'UnAuthorized';
  }
}
