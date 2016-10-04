import React from 'react';
import ReactDOM from 'react-dom';
import { signup } from './actions/session_actions.js';
import configureStore from './store/store.js';

window.sam = {username: "sam", password: "password"};
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.store = configureStore();
  ReactDOM.render(<h1>Welcome to Findaloo</h1>, root);
});
