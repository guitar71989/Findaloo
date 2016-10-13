import React from 'react';

const StarFilter = ({updateStarFilter}) => {

  const change = (event) => {
    debugger
    event.preventDefault();
    const starValue = parseInt(event.target.value)
    updateStarFilter(starValue);
  };

  return(
    <select className="search-bar-star-filter" onChange={change} name="select">
      <option value="0">Filter by reviews</option>
      <option value="1" >★+</option>
      <option value="2">★★+</option>
      <option value="3">★★★+</option>
      <option value="4">★★★★+</option>
      <option value="5">★★★★★</option>
    </select>
  );
};

export default StarFilter;
