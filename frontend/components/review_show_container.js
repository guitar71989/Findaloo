import React from 'react';
import ReviewShow from './review_show.jsx';
import { connect } from 'react-redux';
import { destroyReview } from './../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => {
  return({
  reviewId: ownProps.reviewId,
  author: ownProps.author,
  imageUrl: ownProps.imageUrl,
  rating: ownProps.rating,
  body: ownProps.body,
  currentUserReview: ownProps.currentUserReview,
  currentUser: state.session.currentUser,
  looId: state.loos.id
});};

const mapDispatchToProps = dispatch => ({
  destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
});

const ReviewShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewShow);

export default ReviewShowContainer;
