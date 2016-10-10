import React from 'react';
import LooMap from './loo_map.jsx';
import { Link } from 'react-router';
import ReviewShow from './review_show.jsx';
import StarRating from 'react-star-rating';
import ReviewFormContainer from './review_form_container.js';


const reviewList = (reviews=[]) => (
  reviews.map( (review) => (
    <ReviewShow author={review.author} rating={review.rating} body={review.body} key={review.id}/>
  ))
);

const LooShow = ({ loo, looId, requestLoo }) => {
  const loos = {
    [looId]: loo
  };

  return(
    <div className="single-loo-show">
      <div className="single-loo-map">
        <main className="single-loo-show-main-container group">
          <LooMap className="single-loo-map"
            looId = {looId}
            requestLoo={requestLoo}
            singleLoo={true}
            loos={loos}
            />
          <span className="single-loo-title">{loo.name}</span>
          <span className="single-loo-address">{loo.address}</span>
          <img className="single-loo-picture" src={loo.image_url} />
        </main>
      </div>

      <div className="reviews-container">
        <div className="reviews">
          <h3>Recommended Reviews for {loo.name}</h3>
          <ReviewFormContainer />
          { reviewList(loo.reviews) }
        </div>
      </div>
    </div>
  )
}

export default LooShow;
