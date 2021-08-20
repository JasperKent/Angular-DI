import { Injectable } from '@angular/core';
import { BookReview } from './book-review';

@Injectable({
  providedIn: 'root'
})
export class BookReviewRepositoryService {

  private static readonly mockReviews = [
    {
      title: 'Dr No',
      rating: 5
    },
    {
      title: 'Emma',
      rating: 4
    },    
    {
      title: 'Persuasion',
      rating: 5
    },    
    {
      title: 'Dr No',
      rating: 2
    },    
    {
      title: 'Goldfinger',
      rating: 4
    },    
    {
      title: 'Emma',
      rating: 5
    },    
    {
      title: 'Goldfinger',
      rating: 3
    },    
    {
      title: 'Persuasion',
      rating: 4
    },    
    {
      title: 'Dr No',
      rating: 1
    }
  ] as BookReview[];

  getReviews (): BookReview[] {
    return BookReviewRepositoryService.mockReviews;
  }
}

