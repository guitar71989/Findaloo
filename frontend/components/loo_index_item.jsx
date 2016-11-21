import React from 'react';
import { hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

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
    <div className="index-item-info" onClick={this.handleClick}>
      <img className="toilet" src={loo.image_url} />
      <div className="index-item-info-copy">
        <div className="index-item-category-title">{loo.name}</div>
        <div className="index-item-category-address">{loo.address}</div>
        <StarRatingComponent
          className="index-item-category-review_avg"
          name="name"
          editing={false}
          starCount={5}
          emptyStarColor={'#ccc'}
          starColor={'#ffd700'}
          value={loo.review_avg}
          />
        <div className="index-item-category-review_count">{loo.review_count} </div>
      </div>
    </div>);
  }
}

export default LooIndexItem;
