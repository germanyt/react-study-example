import React from 'react';

import {Link} from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/tranfer">Tranfer</Link></li>
          <li><Link to="/state">State</Link></li>
          <li><Link to="/state_es5">State ES5</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;