import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app.jsx';
import SessionFormContainer from './session_form_container.js';
import LooIndexContainer from './loo_index_container.js';
import SearchContainer from './search_container.js';
import LooShowContainer from './loo_show_container.js';
import LooFormContainer from './loo_form_container.js';
import ReviewFormContainer from './review_form_container.js';

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
        <IndexRoute component={SearchContainer} />
        <Route path="/login" onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
        <Route path="/signup" onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
        <Route path="/loos/new" component={LooFormContainer} />
        <Route path="/loos/:looId" component={LooShowContainer}>
          <Route path="/review" component={ReviewFormContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
