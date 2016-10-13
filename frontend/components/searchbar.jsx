import React from 'react';
import AutocompleteContainer from './autocomplete_container.js';
import StarFilter from './star_filter.jsx';

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
      <form className="search-bar-form" onSubmit={(e)=>e.preventDefault()}>
        <AutocompleteContainer />
        <StarFilter />
      </form>
    </div>
    );
  }
}

export default SearchBar;
