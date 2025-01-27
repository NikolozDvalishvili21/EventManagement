import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PopularSectComponent } from '../../components/popular-sect/popular-sect.component';
import { EventsComponent } from '../../components/events/events.component';
import { FreeEventsComponent } from '../../components/free-events/free-events.component';
import { UsersComponent } from '../../components/users/users.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, PopularSectComponent, EventsComponent, FreeEventsComponent, UsersComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true
})
export class HomepageComponent {

}
