import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.users = this.userService.getAllUsers();
  }

  addUser(): void {
    const newUser: User = {
      id: 0,
      username: 'newUser',
      email: 'newuser@example.com',
      password: 'password123',
      role: 'user',
    };
    this.userService.addUser(newUser);
    this.fetchUsers(); // Refresh the user list
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.fetchUsers(); // Refresh the user list
  }
}
