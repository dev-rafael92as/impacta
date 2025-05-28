import { Injectable } from '@nestjs/common';
import { User } from './auth.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(user: User): User {
    // Gera um id incremental simples
    const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    const newUser = new User(id, user.name, user.email);
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  remove(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}