import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  genre: string;
}

@Component({
  selector: 'app-popular-sect',
  imports: [CommonModule],
  templateUrl: './popular-sect.component.html',
  styleUrls: ['./popular-sect.component.scss'],
})
export class PopularSectComponent {
  genresWithImages: Map<string, string> = new Map();

  constructor() {
    this.fetchGenres();
  }

  fetchGenres() {
    fetch('/assets/data/events.json')
      .then((response) => response.json())
      .then((data) => {
        data.events.forEach((event: Event) => {
          if (!this.genresWithImages.has(event.genre)) {
            this.genresWithImages.set(event.genre, event.imageUrl);
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching events data:', error);
      });
  }
}
