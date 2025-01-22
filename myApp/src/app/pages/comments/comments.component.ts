import { Component } from '@angular/core';
import { CommentItemsComponent } from "../../components/comment-items/comment-items.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-comments',
  imports: [CommentItemsComponent, HeaderComponent, FooterComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

}
