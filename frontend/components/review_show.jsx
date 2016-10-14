import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class ReviewShow extends React.Component {
  constructor(props){
    super(props);
    this.destroyReview = this.destroyReview.bind(this);
  }

  destroyReview(event){
    event.preventDefault();
    this.props.destroyReview(event.currentTarget.value);
  }


  renderEditDelete() {
    if (this.props.currentUserReview){
      return(
        <div>
          <button onClick={this.destroyReview} value={this.props.reviewId} className="undo-loo-button">Redo Loo Review</button>
        </div>
      );
    } else {
      return(
        <div>
        </div>
      );
    }
  }

  render(){
    return(<div className="loo-show-review-item group">
      {this.renderEditDelete()}
      <div className="loo-show-review-item-user-info">
        <img className="loo-show-review-item-image" src={this.props.imageUrl} />
        <p className="loo-show-review-item-username">{this.props.author}</p>
      </div>

      <ul className="loo-show-review-item-reponses">

        <StarRatingComponent
            className="star"
            editing={false}
            starCount={5}
            emptyStarColor={'#ccc'}
            starColor={'#ffd700'}
            value={this.props.rating}
        />
      <li className="loo-show-review-item-body">"{this.props.body}"</li>
      </ul>
    </div>
    );
  }
}

export default ReviewShow;

// = ({author, rating, body, username, currentUserReview}) => {
