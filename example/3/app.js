import React from 'react';
import { render } from 'react-dom';

import {Router, RouterContext, Route, IndexRoute, hashHistory} from 'react-router';
import {createHistory} from 'history';

import App from './components/app.component';
import Index from './components/index.component';
import Transfer from './components/transfer.component';
import State from './components/state.component';
import StateEs5 from './components/state_es5.component';

import PageNotFound from './components/noPage.component';


//import css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

render( (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="tranfer" component={Transfer} />
      <Route path="state" component={State} />
      <Route path="state_es5" component={StateEs5} />
		</Route>
    <Route path="*" component={PageNotFound} />
	</Router> 
), document.getElementById('content') );