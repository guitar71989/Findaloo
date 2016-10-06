import React from 'react';
import LooMap from './loo_map.jsx';
import LooIndex from './loo_index.jsx';

const Search = ({loos, requestLoos}) => {
  return (
    <div>
      <LooMap loos={loos} />
      <LooIndex loos={loos} requestLoos ={requestLoos} />
    </div>
  );

};

export default Search;
