import React from 'react';
import GreetingContainer from './greeting_container.jsx';

const App = ({ children }) => (
  <div>

  <header className="header">
    <nav className="header-nav group">
      <h1 className="header-logo">
        Findaloo is the best way to find <br></br>convenient, local restrooms.
      </h1>
      <GreetingContainer />
    </nav>
  </header>
    {children}
  </div>
);

export default App;
