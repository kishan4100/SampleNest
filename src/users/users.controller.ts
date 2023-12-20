import { All, Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getallUsers(): any[] {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body('name') userName: String) {
    return this.userService.addUser(userName);
  }
}
