import { REQUEST_LOOS, requestLoos, receiveLoos } from './../actions/loo_actions.js';
import { UPDATE_BOUNDS } from './../actions/filter_actions.js';
import { fetchLoos } from './../util/loo_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_LOOS:
      const success = data => dispatch(receiveLoos(data))
      const filters = getState().filters;
      fetchLoos(filters, success);
      break;
    case UPDATE_BOUNDS:
      next(action);
      dispatch(requestLoos());
      break;
    default:
      return next(action);
  }
}
