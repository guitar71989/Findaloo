import React from 'react';
import AutocompleteContainer from './autocomplete_container.js';
import StarFilterContainer from './star_filter_container.js';

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
    if (window.location.hash.slice(0,3) == "#/?") {
      return(
        <div className="search-bar">
          <form className="search-bar-form" onSubmit={(e)=>e.preventDefault()}>
            <AutocompleteContainer />
            <StarFilterContainer />
          </form>
        </div>
      );
    } else {
      return(
        <div className="search-bar">
        </div>
      );}
  }
}

export default SearchBar;
