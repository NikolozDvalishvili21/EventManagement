import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PopularSectComponent } from '../../components/popular-sect/popular-sect.component';
import { EventsComponent } from '../../components/events/events.component';
import { FreeEventsComponent } from '../../components/free-events/free-events.component';
@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, PopularSectComponent, EventsComponent, FreeEventsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
