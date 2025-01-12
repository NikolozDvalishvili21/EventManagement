import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PopularSectComponent } from '../../components/popular-sect/popular-sect.component';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, PopularSectComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
