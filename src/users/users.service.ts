import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [];
  getUsers() {
    return this.users;
  }
  addUser(user: String): String {
    this.users.push(user);
    return 'added successfully';
  }
}
