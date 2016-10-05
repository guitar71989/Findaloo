import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app.jsx'
import SessionFormContainer from './session_form_container.jsx';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/')
      }
  }

  return(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/login" onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
        <Route path="/signup" onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
