import * as ACTIONS from './../actions/session_actions';
import * as API from './../util/session_api_util.js';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => {
    dispatch(ACTIONS.receiveCurrentUser(user))
  };
  const errorCallback = error => dispatch(ACTIONS.receiveErrors(error.responseText));
  switch(action.type){
    case ACTIONS.SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);
    case ACTIONS.LOGIN:
      API.login(action.user, successCallback, errorCallback);
      debugger
      return next(action);
    case ACTIONS.LOGOUT:
      API.logout(() => next(action));
      break;
    default:
      return next(action);
  }
}
