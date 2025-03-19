import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  // Hardcoded reviews data
  private reviewsData = [
    {
      productId: '1',
      reviews: [
        { customer: 'Alice', rating: 5, comment: 'Excellent product!' },
        { customer: 'Bob', rating: 4, comment: 'Very good, would recommend.' },
      ],
    },
    {
      productId: '2',
      reviews: [
        { customer: 'Charlie', rating: 3, comment: 'It’s okay, does the job.' },
        { customer: 'David', rating: 2, comment: 'Not great, poor quality.' },
      ],
    },
    {
      productId: '3',
      reviews: [
        {
          customer: 'Eve',
          rating: 4,
          comment: 'Pretty decent, good value for money.',
        },
      ],
    },
  ];

  constructor() {}

  // Method to get reviews based on productId
  getReviewsByProductId(productId: string) {
    const productReviews = this.reviewsData.find(
      (product) => product.productId === productId
    );
    return productReviews ? productReviews.reviews : [];
  }
}
