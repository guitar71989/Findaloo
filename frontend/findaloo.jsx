import React from 'react';
import ReactDOM from 'react-dom';



//Test AJAX calls
import { signup, login, logout } from './util/session_api_util.js';
window.sam = {username: "sam", password: "password"};
window.success = (data) => ( console.log(data) );
window.error = (error) => ( console.log(error) );
window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Findaloo</h1>, root);
});
