import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


const ReviewShow = ({author, rating, body, username}) => (
  <div className="loo-show-review-item group">
      <p className="loo-show-review-item-username">{author}</p>
      <ul className="loo-show-review-item-reponses">

        <StarRatingComponent
                    className="star"
                    editing={false}
                    starCount={5}
                    emptyStarColor={'#ccc'}
                    starColor={'#ffd700'}
                    value={rating}
                />
        <li className="loo-show-review-item-body">"{body}"</li>
    </ul>
  </div>
);

export default ReviewShow;
