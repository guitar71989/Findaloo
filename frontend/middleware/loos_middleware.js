import { REQUEST_LOOS, requestLoos, receiveLoos } from './../actions/loo_actions.js';
import { fetchLoos } from './../util/loo_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_LOOS:
      const success = data => dispatch(receiveLoos(data))
      fetchLoos(success);
      return next(action);
    default:
      return next(action);
  }
}
