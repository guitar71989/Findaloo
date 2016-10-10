import { requestReviews, CREATE_REVIEW, REQUEST_REVIEWS, receiveReviews } from './../actions/review_actions.js';
import { fetchReviews, createReview } from './../util/review_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    // case REQUEST_REVIEWS: {
    //   const success = data => dispatch(receiveReviews(data))
    //   const looId = action.looId
    //   fetchReviews(looId, success);
    //   break;
    // }
    case CREATE_REVIEW: {
      debugger
      const review = action.review
      const looId = action.review.loo_id
      const success = (looId) => dispatch(requestReviews(looId))
      const error = (error) => console.log(error)
      createReview(review, success, error)
    }
    default:
      return next(action);
  }
}
