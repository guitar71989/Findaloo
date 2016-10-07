import { UPDATE_BOUNDS } from './../actions/filter_actions.js';
import { merge } from 'lodash';

const update_bounds = UPDATE_BOUNDS;

const FilterReducer = (state = { bounds: {} }, action) => {
  switch(action.type){
    case UPDATE_BOUNDS: {
      const nextState = merge({}, state);
      nextState.bounds = action.bounds;
      return nextState;
    }
  default:
    return state;
  }
};

export default FilterReducer;
