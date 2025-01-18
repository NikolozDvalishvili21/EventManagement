import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-inblock',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-inblock.component.html',
  styleUrls: ['./sign-inblock.component.scss'],
})
export class SignInblockComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required!';
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find the user that matches the entered email and password
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === this.email && user.password === this.password
    );

    if (user) {
      // Store the logged-in user as the current user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Reset input fields
      this.email = '';
      this.password = '';

      // Redirect user based on their role
      if (user.role === 'admin') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
