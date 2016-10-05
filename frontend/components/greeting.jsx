import React from 'react';
import {Link} from 'react-router';

const Greeting = ({ currentUser, logout }) => {

  if (currentUser) {
      return(
        <button onClick={logout}>Log Out</button>
      )
  } else {
    return( <ul className="header-list group">
      <li><Link to="/signup" className="nav signup">Sign Up</Link></li>
      <li><Link to="/login" className="nav login">Log In</Link></li>
    </ul>
    )
  }
};

export default Greeting;
