import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  address: string;
  hostName: string;
  followers: string;
  attendance: number;
  attenders: number;
  price: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-free-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './free-events.component.html',
  styleUrl: './free-events.component.scss',
})
export class FreeEventsComponent implements OnInit {
  allEvents: Event[] = [];
  events: Event[] = [];

  ngOnInit() {
    fetch('assets/data/events.json')
      .then((response) => response.json())
      .then((data) => {
        this.allEvents = data.events;
        this.events = this.allEvents
          .filter((event) => event.price === 0) // Filter for free events
          .sort((a, b) => b.attenders - a.attenders)
          .slice(0, 8); // Display top 8 free events
      });
  }
}
