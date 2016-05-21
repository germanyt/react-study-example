import React from 'react';

import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container theme-showcase">
        <h1>Redux!</h1>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/state">State</Link></li>
          <li><Link to="/state_es5">State ES5</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;