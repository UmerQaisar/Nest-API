import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) {
  }

  show(id: number) {
    return this.userRepository.findOne({where: {id: id}})
  }

  create(body: CreateUserDto) {
    return this.userRepository.save(body);
  }

  index(): Promise<User[]> {
    return this.userRepository.find();
  }

  delete(userId) {
    return this.userRepository.delete(userId);
  }
}
