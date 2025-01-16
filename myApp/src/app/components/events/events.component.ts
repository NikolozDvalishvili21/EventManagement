import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  allEvents: Event[] = [];
  events: Event[] = [];

  ngOnInit() {
    fetch('assets/data/events.json')
      .then((response) => response.json())
      .then((data) => {
        this.allEvents = data.events;
        this.events = this.allEvents
          .sort((a, b) => b.attenders - a.attenders)
          .slice(0, 8);
      });
  }
}
