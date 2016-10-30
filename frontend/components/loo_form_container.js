import { connect } from 'react-redux';
import LooForm from './loo_form.jsx';
import createLoo from './../actions/loo_actions.js';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return({
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng
});};

const mapDispatchToProps = dispatch => ({
  createLoo: loo => dispatch(createLoo(loo))
});

const LooFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LooForm);

export default LooFormContainer;
