import React from 'react';
import LooMap from './loo_map.jsx';
import LooIndex from './loo_index.jsx';

const Search = ({loos, requestLoos, updateBounds, filters}) => {
  return (
    <div className="main-ctn">
      <LooIndex loos={loos} requestLoos={requestLoos} />
      <div className="map-ctn">
        <LooMap loos={loos} filters={filters} updateBounds={updateBounds}>
        </LooMap>
      </div>
    </div>
  );

};

export default Search;
