import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoosMiddleware from './loos_middleware';
import ReviewsMiddleware from './review_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  LoosMiddleware,
  ReviewsMiddleware,
  createLogger()
);

export default RootMiddleware;
