import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Review {
  id: number;
  author: string;
  content: string;
  rating?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Comment[]>(this.apiUrl).pipe(
      map((comments) =>
        comments.map((comment) => ({
          id: comment.id,
          author: comment.name,
          content: comment.body,
          rating: Math.floor(Math.random() * 5) + 1,
        }))
      )
    );
  }
}
