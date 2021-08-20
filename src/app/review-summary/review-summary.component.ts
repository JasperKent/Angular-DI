import { Component } from '@angular/core';
import { BookReview } from '../services/book-review';
import { BookReviewsSummaryService } from '../services/book-reviews-summary.service';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.scss']
})
export class ReviewSummaryComponent  {

  get summaries():  BookReview[]{
    return this.bookReviewsSummaryService.reviewSummaries;
  }

  constructor(private bookReviewsSummaryService: BookReviewsSummaryService) { }
}
