import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-sign-upblock',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-upblock.component.html',
  styleUrl: './sign-upblock.component.scss',
})
export class SignUpblockComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  onSubmit() {
    if (
      !this.username ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage = 'All fields are required!';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    const newUser = {
      id: this.generateUserId(),
      username: this.username,
      email: this.email,
      password: this.password,
      role: 'user',
      avatar: this.generateAvatarUrl(this.username),
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';

    alert('User successfully registered!');
  }

  generateUserId(): number {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.length
      ? Math.max(...users.map((user: User) => user.id)) + 1
      : 1;
  }

  generateAvatarUrl(username: string): string {
    const nameParts = username.split(' ');
    const avatarName = nameParts[0][0] + nameParts[1][0]; // Initials
    return `https://avatars.dicebear.com/api/initials/${avatarName}.svg`;
  }
}
