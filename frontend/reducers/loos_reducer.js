import { merge } from 'lodash';
import { RECEIVE_LOOS } from './../actions/loo_actions.js';

const LoosReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_LOOS: {
      return action.loos;
    }
    default:
      return state;
  }
};

export default LoosReducer;
