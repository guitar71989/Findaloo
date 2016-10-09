import { merge } from 'lodash';
import { RECEIVE_LOOS, RECEIVE_LOO } from './../actions/loo_actions.js';

const LoosReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_LOOS: {
      return action.loos;
    }
    case RECEIVE_LOO: {
      return action.loo;
    }
    default:
      return state;
  }
};

export default LoosReducer;
