import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root', // Makes the service globally available
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'adminUser',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      id: 2,
      username: 'organizerUser',
      email: 'organizer@example.com',
      password: 'organizer123',
      role: 'organizer',
    },
    {
      id: 3,
      username: 'regularUser',
      email: 'user@example.com',
      password: 'user123',
      role: 'user',
    },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: User): void {
    user.id = this.generateId();
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  private generateId(): number {
    return this.users.length > 0
      ? Math.max(...this.users.map((u) => u.id)) + 1
      : 1;
  }
}
