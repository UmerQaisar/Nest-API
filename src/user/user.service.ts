import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  show(id: number) {
    return 'This is a single user with id: ' + id;
  }

  create(body: CreateUserDto) {
    return body;
  }

  index() {
    return 'This is the list of all users';
  }

  delete(userId) {
    return 'This user is going to be deleted ID: ' + userId;
  }
}
