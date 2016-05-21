import React from 'react';

class Parent extends React.Component {
  render() {
    return (
    	<div>
        <h3>Parent</h3>
        <p>This is children:</p>
        {this.props.children}
    	</div>
    );
  }
}

export default Parent;