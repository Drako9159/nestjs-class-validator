import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      phone: '72938493',
    },
    { id: 2, name: 'Master Doe', phone: '55948504' },
  ];
  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return { ...user, id: this.users.length + 1 };
  }
}
