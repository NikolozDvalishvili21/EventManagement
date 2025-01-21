import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review.service';
import { RouterModule } from '@angular/router';

interface Review {
  id: number;
  author: string;
  content: string;
  rating?: number;
}

@Component({
  selector: 'app-comment-items',
  imports: [CommonModule, RouterModule],
  templateUrl: './comment-items.component.html',
  styleUrl: './comment-items.component.scss',
  standalone: true
})
export class CommentItemsComponent {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {
    console.log('CommentsComponent constructor called');
  }

  ngOnInit(): void {
    console.log('CommentsComponent ngOnInit started');

    this.reviewService.getReviews().subscribe({
      next: (data) => {
        console.log('Reviews data received:', data);
        this.reviews = data;
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
      },
      complete: () => {
        console.log('Reviews subscription completed');
      },
    });
  }

  ngOnDestroy() {
    console.log('CommentsComponent destroyed');
  }

  ngAfterViewInit() {
    console.log('CommentsComponent view initialized');
  }
}
