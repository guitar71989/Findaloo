import React from 'react';
import AutocompleteContainer from './autocomplete_container.js';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state  = {
      textbar: "",
      ratings: 0,
      num_reviews: 0
    };
  }

  render(){
    return(
    <div className="search-bar">
      <form className="search-bar-form">
        <AutocompleteContainer />
      </form>
    </div>
    );
  }
}

export default SearchBar;
