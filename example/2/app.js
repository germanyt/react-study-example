import React from 'react';
import { render } from 'react-dom';

import {Router, RouterContext, Route, IndexRoute, Link, useRouterHistory, withRouter} from 'react-router';
import {createHistory} from 'history';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about/author">About/author</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/user/Gavin">User/Gavin</Link></li>
          <li><Link to="/user/David">User/David</Link></li>
          <li><Link to="/nomatch">No Match</Link></li>
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
        {this.props.children}
      </div>
    );
  }
}

class AboutIndex extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class Author extends React.Component {
  render() {
    return (
      <div>
        <h2>Author: Gavin</h2>
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class UserIndex extends React.Component {
  render() {
    return (
      <div>
        <h2>User Index</h2>
      </div>
    )
  }
}

class UserCenter extends React.Component {
  render() {
    return (
      <div>
        <h2>User Name: {this.props.params.username}</h2>
      </div>
    )
  }
}

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}


const history = useRouterHistory(createHistory)({
  basename: '/example/2'
});

render( (
	<Router history={history}>
		<Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="about" component={withRouter(About)}>
        <IndexRoute component={AboutIndex} />
        <Route path="author" component={Author} />
      </Route>
      <Route path="user" component={User}>
        <IndexRoute component={UserIndex} />
        <Route path=":username" component={UserCenter} />
      </Route>
		</Route>
    <Route path="*" component={PageNotFound} />
	</Router> 
), document.getElementById('content') );