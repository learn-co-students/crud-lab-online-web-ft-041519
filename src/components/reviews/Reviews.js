import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const linkedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id);
    const reviews = linkedReviews.map( (review) => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} /> )

    return(
      <div>
        Reviews
        {reviews}
      </div>
    );
  }
};

export default Reviews;