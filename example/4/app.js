import React from 'react';
import { render } from 'react-dom';

import {Router, RouterContext, Route, IndexRoute, hashHistory} from 'react-router';
// import {createHistory} from 'history';

import { Provider } from 'react-redux';
import store from './store';

import {
  App,
  Index,
  PageNotFound
} from './components';

import {
  Message
} from './containers';


//import css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

render( (
  <Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="message" component={Message} />
		</Route>
    <Route path="*" component={PageNotFound} />
	</Router>
  </Provider> 
), document.getElementById('content') );