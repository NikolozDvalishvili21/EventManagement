import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-description',
  imports: [],
  templateUrl: './event-description.component.html',
  styleUrl: './event-description.component.scss'
})
export class EventDescriptionComponent {
  @Input() eventDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.eventDetails = params; 
    });
  }
}
