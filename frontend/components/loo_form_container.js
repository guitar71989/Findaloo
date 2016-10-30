import { connect } from 'react-redux';
import LooForm from './loo_form.jsx';
import { createLoo } from './../actions/loo_actions.js';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return({
    lat: parseFloat(ownProps.location.query.lat),
    lng: parseFloat(ownProps.location.query.lng)
});};

const mapDispatchToProps = dispatch => ({
  createLoo: (loo, callback) => dispatch(createLoo(loo, callback))
});

const LooFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooForm);

export default LooFormContainer;
