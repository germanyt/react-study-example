import React from 'react';

class Receive extends React.Component {
	render() {
		return (
			<div>
				props is : {JSON.stringify(this.props)}
			</div>
		);
	}
}

export default Receive;