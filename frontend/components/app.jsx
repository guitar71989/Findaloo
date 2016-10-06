import React from 'react';
import GreetingContainer from './greeting_container.jsx';
import SessionFormContainer from './session_form_container.js';

const App = ({ children }) => {
  return(
  <div>

  <header className="header">
    <nav className="header-nav group">
      <h1 className="header-logo">
        Findaloo is the best way to find convenient, local restrooms.
      </h1>
      <GreetingContainer />
    </nav>
  </header>
  {children}
  </div>
)};

export default App;
