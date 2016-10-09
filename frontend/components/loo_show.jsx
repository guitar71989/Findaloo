import React from 'react';
import LooMap from './loo_map.jsx';
import { Link } from 'react-router';


const LooShow = ({ loo, looId, requestLoo }) => {
  const loos = {
    [looId]: loo
  };

  return(
    <div className="single-loo-show">
      <div className="single-loo-map">
        <main className="single-loo-show-main-container group">
          <LooMap className="single-loo-map"
            looId = {looId}
            requestLoo={requestLoo}
            singleLoo={true}
            loos={loos}
            />
          <span className="single-loo-title">{loo.name}</span>
          <span className="single-loo-address">{loo.address}</span>
          <img className="single-loo-picture" src={loo.image_url} />
        </main>
      </div>
    </div>
  )
}

export default LooShow;
