import React from 'react';
import { connect } from 'react-redux';
import { logout, login, signup } from '../actions/session_actions.js';
import SessionForm from './session_form.jsx';
import {withRouter} from 'react-router';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType, processForm;
  if (location.hash.includes("signup")) {
    formType = "signup";
    processForm = (user) => dispatch(signup(user));
  }
  else if (location.hash.includes("login")) {
    formType = "login";
    processForm = (user) => dispatch(login(user));
  }
  return({
    formType: formType,
    processForm: processForm
  });
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default withRouter(SessionFormContainer);
