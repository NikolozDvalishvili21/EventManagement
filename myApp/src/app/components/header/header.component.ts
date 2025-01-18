import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dropdownVisible = false;
  currentUser: any;
  isOrganizerOrAdmin: boolean = false;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (this.currentUser) {
      // Check if the current user is an 'organizer' or 'admin'
      this.isOrganizerOrAdmin = this.currentUser.role === 'organizer' || this.currentUser.role === 'admin';
    }
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.dropdownVisible = !this.dropdownVisible;
  }

  signOut() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.isOrganizerOrAdmin = false; // Reset visibility when signed out
  }
}
