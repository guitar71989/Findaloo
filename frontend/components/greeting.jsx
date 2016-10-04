import React from 'react';
import {Link} from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
      return(
        <button onClick={logout}>Log Out</button>
      )
  } else {
    return( <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
    )
  }
};

export default Greeting;
