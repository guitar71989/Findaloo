import React from 'react';
import LooMap from './loo_map.jsx';
import LooIndex from './loo_index.jsx';
import SearchBar from './searchbar.jsx';

const Search = ({loos, requestLoos, updateBounds}) => {
  return (
    <div>
      <LooMap loos={loos} updateBounds={updateBounds}>
      </LooMap>
      <SearchBar/>
      <LooIndex loos={loos} requestLoos={requestLoos} />
    </div>
  );

};

export default Search;
