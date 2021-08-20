import { TestBed } from '@angular/core/testing';

import { BookReviewsSummaryService } from './book-reviews-summary.service';

describe('BookReviewsSummaryService', () => {
  let service: BookReviewsSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookReviewsSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
