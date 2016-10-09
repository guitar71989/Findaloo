import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import LoosReducer from './loos_reducer.js';
import FilterReducer from './filter_reducer.js';
import ReviewsReducer from './reviews_reducer.js';

const RootReducer = combineReducers({
    session: SessionReducer,
    loos: LoosReducer,
    reviews: ReviewsReducer,
    filters: FilterReducer
});

export default RootReducer;
