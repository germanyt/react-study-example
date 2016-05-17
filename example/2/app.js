import React from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute, Link, useRouterHistory} from 'react-router';
import {createHistory} from 'history';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    return (
    	<div>
        <h2>Index</h2>
    	</div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
    	<div>
        <h2>About</h2>
    	</div>
    );
  }
}

const history = useRouterHistory(createHistory)({
  basename: '/example/2'
});

render( (
	<Router history={history}>
		<Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
		</Route>
	</Router> 
), document.getElementById('content') );