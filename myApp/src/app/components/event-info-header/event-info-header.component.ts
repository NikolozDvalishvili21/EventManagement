import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-info-header',
  imports: [],
  templateUrl: './event-info-header.component.html',
  styleUrl: './event-info-header.component.scss',
})
export class EventInfoHeaderComponent implements OnInit {
  @Input() eventDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.eventDetails = params; 
    });
  }
}
