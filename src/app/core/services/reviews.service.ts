import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  // Hardcoded reviews data
  reviewsData = [
    {
      productId: '1',
      reviews: [
        {
          customer: 'Alice',
          rating: 5,
          comment: 'Excellent product! Highly recommend.',
        },
        { customer: 'Bob', rating: 4, comment: 'Very good, would recommend.' },
      ],
    },
    {
      productId: '2',
      reviews: [
        { customer: 'Charlie', rating: 3, comment: "It's okay, does the job." },
        { customer: 'David', rating: 2, comment: 'Not great, poor quality.' },
        { customer: 'Eve', rating: 5, comment: 'Fantastic product, loved it!' },
      ],
    },
    {
      productId: '3',
      reviews: [
        {
          customer: 'Frank',
          rating: 4,
          comment: 'Good quality, but could improve.',
        },
        {
          customer: 'Grace',
          rating: 3,
          comment: "It's alright, does the job for now.",
        },
      ],
    },
    {
      productId: '4',
      reviews: [
        {
          customer: 'Hannah',
          rating: 5,
          comment: 'Perfect! Exactly what I needed.',
        },
        {
          customer: 'Ivy',
          rating: 4,
          comment: 'Pretty good, would buy again.',
        },
        {
          customer: 'Jack',
          rating: 5,
          comment: "Best purchase I've made this year!",
        },
      ],
    },
    {
      productId: '5',
      reviews: [
        {
          customer: 'Kevin',
          rating: 3,
          comment: "It's okay, but not what I expected.",
        },
        {
          customer: 'Liam',
          rating: 2,
          comment: "Wouldn't recommend, poor build quality.",
        },
      ],
    },
    {
      productId: '6',
      reviews: [
        { customer: 'Mona', rating: 4, comment: 'Good value for the price.' },
        {
          customer: 'Nina',
          rating: 5,
          comment: 'Loved it, exactly as described.',
        },
        {
          customer: 'Oscar',
          rating: 4,
          comment: 'Decent product for the price, satisfied.',
        },
      ],
    },
    {
      productId: '7',
      reviews: [
        {
          customer: 'Paul',
          rating: 4,
          comment: 'Pretty good quality, does the job.',
        },
        {
          customer: 'Quincy',
          rating: 5,
          comment: 'Fantastic quality, exactly what I needed.',
        },
      ],
    },
    {
      productId: '8',
      reviews: [
        { customer: 'Rachel', rating: 3, comment: 'Decent, but not amazing.' },
        {
          customer: 'Samuel',
          rating: 5,
          comment: 'Amazing product, exceeded expectations.',
        },
        {
          customer: 'Tina',
          rating: 4,
          comment: 'Good value, happy with the purchase.',
        },
      ],
    },
    {
      productId: '9',
      reviews: [
        {
          customer: 'Uma',
          rating: 4,
          comment: 'Solid product, no issues so far.',
        },
        {
          customer: 'Vera',
          rating: 2,
          comment: 'Not worth the price, would not buy again.',
        },
        {
          customer: 'Will',
          rating: 4,
          comment: 'Great, but it took a bit longer to arrive.',
        },
      ],
    },
    {
      productId: '10',
      reviews: [
        {
          customer: 'Xander',
          rating: 5,
          comment: 'Absolutely love this! Worth every penny.',
        },
        {
          customer: 'Yara',
          rating: 4,
          comment: 'Very good quality, will buy more.',
        },
      ],
    },
    {
      productId: '11',
      reviews: [
        {
          customer: 'Zane',
          rating: 5,
          comment: 'Perfect product, exactly what I was looking for.',
        },
        {
          customer: 'Amara',
          rating: 4,
          comment: 'Great, but the packaging could be better.',
        },
        {
          customer: 'Ben',
          rating: 3,
          comment: 'Not bad, but could use improvements.',
        },
      ],
    },
    {
      productId: '12',
      reviews: [
        {
          customer: 'Cameron',
          rating: 4,
          comment: 'Works great for the price.',
        },
        {
          customer: 'Diana',
          rating: 2,
          comment: "Not happy with the quality, wouldn't buy again.",
        },
      ],
    },
    {
      productId: '13',
      reviews: [
        {
          customer: 'Elena',
          rating: 5,
          comment: 'Wonderful product, very useful!',
        },
        {
          customer: 'Felix',
          rating: 4,
          comment: 'Good quality, very pleased with it.',
        },
        {
          customer: 'George',
          rating: 5,
          comment: "Top notch! Best I've ever used.",
        },
      ],
    },
    {
      productId: '14',
      reviews: [
        { customer: 'Helen', rating: 3, comment: "It's okay, expected more." },
        {
          customer: 'Ian',
          rating: 4,
          comment: 'Nice product, works as advertised.',
        },
      ],
    },
    {
      productId: '15',
      reviews: [
        {
          customer: 'James',
          rating: 5,
          comment: 'Incredible! Beyond expectations.',
        },
        {
          customer: 'Kara',
          rating: 4,
          comment: 'Great product, but a little expensive.',
        },
      ],
    },
    {
      productId: '16',
      reviews: [
        {
          customer: 'Laura',
          rating: 4,
          comment: 'Good quality and performance.',
        },
        {
          customer: 'Megan',
          rating: 5,
          comment: "I'm very satisfied, will recommend it to others.",
        },
        {
          customer: 'Nick',
          rating: 4,
          comment: 'Nice item, does what I expected.',
        },
      ],
    },
    {
      productId: '17',
      reviews: [
        {
          customer: 'Olivia',
          rating: 4,
          comment: 'Very good product for the price.',
        },
        {
          customer: 'Pauline',
          rating: 5,
          comment: 'I love this! Will buy again.',
        },
        {
          customer: 'Quinn',
          rating: 3,
          comment: "It's okay, but not amazing.",
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
