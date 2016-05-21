import React from 'react';

import Receive from './receive.component';

class Transfer extends React.Component {
	render() {
		let props = {
			a: 1,
			b: 'show Text',
			c: ['tv', 'ico', 'co']
		};
		return (
			<div>
				<h2>Transfer</h2>
				<Receive {...props} />
				<Receive x="2002" y={['fb', 'tw', 'gl']} z={{text: 'hello', name: 'Deo'}} />
			</div>
		);
	}
}

export default Transfer;