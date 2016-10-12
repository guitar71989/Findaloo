import { UPDATE_BOUNDS, UPDATE_LOCATION } from './../actions/filter_actions.js';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  bounds: {},
  coords: {},
  location: {}
});

const FilterReducer = (state = defaultState, action) => {
  switch(action.type){
    case UPDATE_BOUNDS: {
      const nextState = merge({}, state);
      nextState.bounds = action.bounds;
      return nextState;
    }
    case UPDATE_LOCATION: {
      const nextState = merge({}, state);
      nextState.coords = action.coords;
      nextState.location = action.location;
      return nextState;
    }
  default:
    return state;
  }
};

export default FilterReducer;
