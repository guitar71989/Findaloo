import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import LoosMiddleware from './loos_middleware';
import createLogger from 'redux-logger';

let RootMiddleware;

const middlewares = [
  SessionMiddleware,
  LoosMiddleware,
];

if (process.env.NODE_ENV === "production") {
  RootMiddleware = applyMiddleware(
    ...middlewares
  );
} else {
  RootMiddleware = applyMiddleware(
    ...middlewares,
    createLogger()
  );
}




export default RootMiddleware;
