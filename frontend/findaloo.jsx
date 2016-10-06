import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { requestLoos, REQUEST_LOOS } from './actions/loo_actions.js';

document.addEventListener('DOMContentLoaded', () => {

  window.requestLoos = requestLoos;

  let store;

  if (window.currentUser) {
  const initialState = {
    session: {
      currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
