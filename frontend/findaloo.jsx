import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import { requestLoos, REQUEST_LOOS } from './actions/loo_actions.js';
import { createReview } from './util/review_api_util.js';

document.addEventListener('DOMContentLoaded', () => {

  window.review = { loo_id: 18, body: "this is review numero uno", rating:5}
  window.success = (data) => { console.log(data); };
  window.error = (data) => { console.log(data); };

  window.createReview = createReview;

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
