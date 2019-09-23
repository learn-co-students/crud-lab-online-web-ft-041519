import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;

    const associatedReviews = reviews.filter(review => {
      return review.restaurantId === restaurantId
    });

    const reviewsList = associatedReviews.map(review => {
      return (
        <Review
          key={review.id}
          review={review}
          deleteReview={deleteReview}
        />
      )}
    )

    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
