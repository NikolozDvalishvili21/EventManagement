import { Component } from '@angular/core';
import { EventInfoHeaderComponent } from '../../components/event-info-header/event-info-header.component';
import { HeaderComponent } from "../../components/header/header.component";
import { EventDescriptionComponent } from "../../components/event-description/event-description.component";
import { BasicInfoComponent } from '../../components/basic-info/basic-info.component';
import { FooterComponent } from "../../components/footer/footer.component";
@Component({
  selector: 'app-event-page',
  imports: [EventInfoHeaderComponent, HeaderComponent, EventDescriptionComponent, BasicInfoComponent, FooterComponent],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent {

}
