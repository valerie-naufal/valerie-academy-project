import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0; // Rating passed from parent
  stars: string[] = []; // Array to hold star statuses (full, half, empty)

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['rating'] &&
      this.rating !== undefined &&
      this.rating !== null
    ) {
      this.stars = this.calculateStars(this.rating);
    }
  }

  private calculateStars(rating: number): string[] {
    const totalStars = 5; // Total number of stars
    const filledStars = Math.floor(rating); // Number of fully filled stars (whole number part)
    const hasHalfStar = rating % 1 !== 0; // Check if we need a half star (decimal part)

    const starsArray: string[] = [];

    // Create stars array based on the rating
    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        starsArray.push('filled'); // Full star
      } else if (i === filledStars && hasHalfStar) {
        starsArray.push('half'); // Half star
      } else {
        starsArray.push('empty'); // Empty star
      }
    }
    return starsArray;
  }
}
