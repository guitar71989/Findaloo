import React from 'react';

const ReviewShow = ({author, rating, body, username}) => (
  <div className="loo-show-review-item group">
      <p className="loo-show-review-item-username">{author}</p>
      <ul className="loo-show-review-item-reponses">
        <li className="loo-show-review-item-rating">Rating: {rating}</li>
        <li className="loo-show-review-item-body">"{body}"</li>
    </ul>
  </div>
);

export default ReviewShow;
