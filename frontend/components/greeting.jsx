import React from 'react';
import {Link} from 'react-router';

const Greeting = ({ currentUser, logout }) => {

  if (currentUser) {
      return(
        <div className="logged-in-ctn-main">
          <img className="logged-in-user-image" src={currentUser.image_url} />
          <p className="logged-in-ctn username">{'Signed in as ' + currentUser.username}</p><br></br>
          <button className="logged-in-ctn logout-btn" onClick={logout}>Log Out</button>
        </div>
      );
  } else {
    return( <ul className="header-list">
      <li><Link to="/signup" className="nav signup">Sign Up</Link></li>
      <li><Link to="/login" className="nav login">Log In</Link></li>
    </ul>
  );
  }
};

export default Greeting;
