import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
      </div>
    );
  }
}

render( ( <App /> ), document.getElementById('content') );