import React from 'react';
import ReviewForm from './review_form.jsx';
import { connect } from 'react-redux';
import { createReview } from './../actions/review_actions.js';

const mapStateToProps = (state, ownProps) => {
  return({
  currentUser: state.session.currentUser,
  looId: state.loos.id
});};

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review))
});

const ReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

export default ReviewFormContainer;
