import React from 'react';
import {Link} from 'react-router';

class Greeting extends React.Component { currentUser, logout }) => {

  const showSessionForm = function(e) => {
    console.log("Hello");
  }

  if (this.props.currentUser) {
      return(
        <button onClick={this.props.logout}>Log Out</button>
      )
  } else {
    return( <ul className="header-list group">
      <li><Link to="/signup" className="nav signup" onMouseEnter={this.showSessionForm.bind(this)}>Sign Up</Link></li>
      <li><Link to="/login" className="nav login" onMouseEnter={this.showSessionForm.bind(this)}>Log In</Link></li>
    </ul>
    )
  }
};

export default Greeting;


//
//
//
// const Greeting = ({ currentUser, logout }) => {
//
//   const showSessionForm = function(e) => {
//     console.log("Hello");
//   }
//
//   if (currentUser) {
//       return(
//         <button onClick={logout}>Log Out</button>
//       )
//   } else {
//     return( <ul className="header-list group">
//       <li><Link to="/signup" className="nav signup" onMouseEnter={this.showSessionForm.bind(this)}>Sign Up</Link></li>
//       <li><Link to="/login" className="nav login" onMouseEnter={this.showSessionForm.bind(this)}>Log In</Link></li>
//     </ul>
//     )
//   }
// };
//
// export default Greeting;
