import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { hashHistory } from 'react-router';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { rating: 5, body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToLooShow = this.navigateToLooShow.bind(this);
  }


  navigateToLooShow() {
    this.props.router.replace(`/${this.props.loo.id}`);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state);
    this.navigateToLooShow();
  }

  onStarClick(e){
    console.log("hello");
  }


  render(){
    return(
      <form className="review-loo-form">

        <textarea className="review-loo-form-body"
          value={this.state.body}
          type="text"
          placeholder="Please write a comment here..."
        />

        <StarRatingComponent className="star"
          name="rate1"
          size={10000}
          emptyStarColor={'#ccc'}
          starColor={'#ffd700'}
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />

        <input className="review-loo-form-submit"
          type="submit"
          onClick={this.handleSubmit}
          placeholder="Please write a comment here..."
        />
      </form>
    );
  }
}

  export default ReviewForm;
