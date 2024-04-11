import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
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
}
