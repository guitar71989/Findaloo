import { connect } from 'react-redux';
import { logout, login, signup } from '../actions/session_actions.js';
import SessionForm from './session_form.jsx';
import {withRouter} from 'react-router';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return({
    processForm: user => dispatch(processForm(user)),
    formType: formType,
  });
};

const SessionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default withRouter(SessionFormContainer);
