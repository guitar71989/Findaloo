import React from 'react';
import LooMap from './loo_map.jsx';


class LooShow extends React.Component {

  componentWillMount(){
    this.props.requestLoos(this.props.looId);
  }

  render() {
    if (this.props.loos) {
      return(
        <div className="loo-index">
          <h1 className="loo-index-title">Loo Show Page</h1>
          <LooMap looId = {this.props.looId} requestLoo={this.props.requestLoo} singleLoo={true} loos={this.props.loos}></LooMap>
        </div>
      );
    } else {
      return(
        <div>

        </div>
      );
    }
  }
}

export default LooShow;
