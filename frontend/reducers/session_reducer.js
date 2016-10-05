import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions.js';

const SessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const nextState = merge({}, state);
      nextState.currentUser = action.user;
      return nextState;
    }
    case RECEIVE_ERRORS: {
      const nextState = merge({}, state);
      nextState.errors = action.errors;
      nextState.currentUser = null;
      return nextState;
    }
    case LOGOUT: {
      const nextState = merge({}, state);
      nextState.errors = [];
      nextState.currentUser = null;
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default SessionReducer;
