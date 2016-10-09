import { requestReviews, REQUEST_REVIEWS, receiveReviews } from './../actions/review_actions.js';
import { fetchReviews } from './../util/review_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_REVIEWS: {
      const success = data => dispatch(receiveReviews(data))
      const looId = action.looId
      fetchLoos(looId, success);
      break;
    }
    default:
      return next(action);
  }
}
