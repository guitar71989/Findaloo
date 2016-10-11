import { requestLoo,
         REQUEST_LOOS,
         receiveLoos,
         REQUEST_LOO,
         receiveLoo,
       } from './../actions/loo_actions.js';
import { CREATE_REVIEW } from './../actions/review_actions.js';
import { createReview } from './../util/review_api_util.js';
import { fetchLoos, fetchLoo } from './../util/loo_api_util.js';
import { UPDATE_BOUNDS } from './../actions/filter_actions.js';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_LOOS: {
      const success = data => dispatch(receiveLoos(data))
      const filters = getState().filters;
      fetchLoos(filters, success);
      break;
    }
    case REQUEST_LOO: {
      const success = data => dispatch(receiveLoo(data))
      fetchLoo(action.id, success);
      break;
    }
    case UPDATE_BOUNDS: {
      next(action);
      dispatch(requestLoos());
      break;
    }
    case CREATE_REVIEW: {
      const review = action.review
      const success = (data) => dispatch(requestLoo(data.loo_id))
      const error = (error) => console.log(error)
      createReview(review, success, error)
      break;
    }
    default:
      return next(action);
  }
}
