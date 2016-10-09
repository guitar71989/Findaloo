import React from 'react';
import { hashHistory } from 'react-router';

class LooIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  const looId = this.props.loo.id;
  hashHistory.push("loos/" +looId );
}

  render() {
    const loo = this.props.loo;
    return(
    <div className="index-item-info group">
      <img className="toilet" src={loo.image_url} />
      <span className="index-item-category-title" onClick={this.handleClick}>{loo.name}</span>
      <span className="index-item-category-address">{loo.address}</span>
    </div>);
  }
}

export default LooIndexItem;
