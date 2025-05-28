import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './auth.service';
import { User } from './auth.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() user: Omit<User, 'id'>): User {
    return this.usersService.create(user as User);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.usersService.remove(Number(id));
  }
}