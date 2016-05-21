import React from 'react';

const StateEs5 = React.createClass({
	getInitialState() {
		return {count: 0};
	},

	tick() {
		this.setState({count: this.state.count + 1});
	},

	render() {
		return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
	}
});

export default StateEs5;