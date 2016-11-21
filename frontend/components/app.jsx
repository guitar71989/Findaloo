import React from 'react';
import GreetingContainer from './greeting_container.jsx';
import SessionFormContainer from './session_form_container.js';
import { hashHistory } from 'react-router';
import SearchBar from './searchbar.jsx';

const App = ({ children }) => {
  return(
  <div>

  <header className="header">
    <nav className="header-nav">
      <div onClick={() => hashHistory.push("/")} className="header-logo">
        <img className="header-logo-image" src={findalooAssets.logo_illustration}></img>
        <p>Findaloo is the best way to find convenient, local restrooms.</p>
      </div>
      <SearchBar/>
      <GreetingContainer />
    </nav>
  </header>
  {children}
  </div>
)};

export default App;
