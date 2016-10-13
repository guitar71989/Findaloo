import { UPDATE_BOUNDS, UPDATE_LOCATION , UPDATE_STAR_FILTER } from './../actions/filter_actions.js';
import { merge } from 'lodash';

const defaultState = Object.freeze({
  bounds: {},
  coords: {},
  location: {},
  starValue: 0
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
    case UPDATE_STAR_FILTER: {
      const nextState = merge({}, state);
      nextState.starValue = action.starValue;
      return nextState;
    }
  default:
    return state;
  }
};

export default FilterReducer;
