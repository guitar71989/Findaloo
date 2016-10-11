import React from 'react';

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
        <input className="search-textbar" type="text" placeholder="Find a loo near you..."></input>
        <input type="submit" />
      </form>
    </div>
    );
  }
}

export default SearchBar;
