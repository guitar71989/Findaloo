import React from 'react';

class LooIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const loo = this.props.loo;
    return(
    <div className="index-item-info group">
      <span className="index-item-category"> <img src="{loo.image_url}"></img></span>
      <span className="index-item-category-title">{loo.name}</span>
      <span className="index-item-category">{loo.address}</span>
    </div>);
  }
}

export default LooIndexItem;
