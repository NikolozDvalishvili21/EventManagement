import { Component } from '@angular/core';
import { CommentItemsComponent } from "../../components/comment-items/comment-items.component";

@Component({
  selector: 'app-comments',
  imports: [CommentItemsComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

}
