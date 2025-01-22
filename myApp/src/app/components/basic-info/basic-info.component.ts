import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-basic-info',
  imports: [],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
})
export class BasicInfoComponent {
  @Input() eventDetails: any;
  formattedTime: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.eventDetails = params;
      if (this.eventDetails?.time) {
        this.formattedTime = this.formatTime(this.eventDetails.time);
      }
    });

    if (this.eventDetails?.time) {
      this.formattedTime = this.formatTime(this.eventDetails.time);
    }
  }

  formatTime(time: string): string {
    const [hours, minutes] = time.split(':').map(Number);

    const period = hours >= 12 ? 'PM' : 'AM';

    const hourIn12HourFormat = hours % 12 || 12;

    return `${hourIn12HourFormat}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${period}`;
  }
}
