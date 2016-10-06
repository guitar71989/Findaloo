import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import LoosReducer from './loos_reducer.js';

const RootReducer = combineReducers({
    session: SessionReducer,
    loos: LoosReducer
});

export default RootReducer;
