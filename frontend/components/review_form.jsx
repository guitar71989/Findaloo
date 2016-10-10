import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { hashHistory } from 'react-router';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    const loo_id = this.props.looId;
    this.state = {loo_id, rating: 0, body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToLooShow = this.navigateToLooShow.bind(this);
  }


  navigateToLooShow() {
    this.props.router.replace(`/${this.props.params.looId}`);
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.loo_id = this.props.looId;
    this.props.createReview(this.state);
  }

  onStarClick(newValue){
    this.setState({rating: newValue});
  }

  inputChange(event){
    this.setState({body: event.target.value});
  }

  reviewFormUser(){
    if (this.props.currentUser) {
      return(
        <p className="review-loo-form-username">{this.props.currentUser.username}</p>
      );
    } else {
      return(
        <p> Sign up for Findaloo and review this loo!</p>
      );

    }
  }

  render(){
    return(
      <form className="group">
        <div className="review-loo-form-user">
          {this.reviewFormUser()}
        </div>

        <input className="review-loo-form-submit"
          type="submit"
          onClick={this.handleSubmit}
          value="Review this loo"
          />

        <fieldset className="review-loo-form group">


          <StarRatingComponent className="star"
            name="rate1"
            emptyStarColor={'#ccc'}
            starColor={'#ffd700'}
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick.bind(this)}
          />

        <textarea className="review-loo-form-body"
          value={this.state.body}
          type="text"
          placeholder="Please write a comment here..."
          onChange={this.inputChange.bind(this)}
          />
        </fieldset>
      </form>
    );
  }
}

  export default ReviewForm;
