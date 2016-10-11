import React from 'react';
import LooMap from './loo_map.jsx';
import { Link } from 'react-router';
import ReviewShowContainer from './review_show_container.js';
import ReviewFormContainer from './review_form_container.js';


const reviewList = (reviews=[]) => {
  return(reviews.map( (review) => (
  <ReviewShowContainer reviewId={review.id} author={review.author} rating={review.rating} body={review.body} key={review.id}/>
  )))
}

const LooShow = ({ loo, looId, requestLoo, currentUser }) => {
  const loos = {
    [looId]: loo
  };

  const renderCurrentUserForm = () => {
    if (loo.current_user_review) {
      return(
          <ReviewShowContainer author={currentUser.username}
            reviewId={loo.current_user_review.id}
            key={loo.current_user_review.id}
            rating={loo.current_user_review.rating}
            body={loo.current_user_review.body}
            currentUserReview={true}
            key={loo.current_user_review.id}/>
      )
    } else {
      return(
        <ReviewFormContainer />
      )
    }
  }


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
          <span className="single-loo-review_avg">{loo.review_avg}</span>
          <span className="single-loo-review_count">{loo.review_count}</span>
          <img className="single-loo-picture" src={loo.image_url} />
        </main>
      </div>

      <div className="reviews-container">
        <div className="reviews">
          <h3 className="your-review">Your Review</h3>
          { renderCurrentUserForm() }
          <h3 className="other-reviews">Recommended Reviews for {loo.name}</h3>
          { reviewList(loo.reviews) }
        </div>
      </div>
    </div>
  )
}

export default LooShow;
