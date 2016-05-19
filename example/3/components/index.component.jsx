import React from 'react';

import Parent from './parent.component';

import Context from './context.component';

class Index extends React.Component {
  render() {
    return (
    	<div className="container theme-showcase">
        <h2>Index</h2>
        <div>
	        <Parent />
	        <code>&lt;Parent /&gt;</code>
        </div>
        <div>
	        <Parent>Hello world!</Parent>
	        <code>&lt;Parent&gt;字符串&lt;/Parent&gt;</code>
        </div>

        <div>
	        <Parent>
	        	<h1>这是H1</h1>
	        	<h2>这是H2</h2>
	        </Parent>
	        <code>&lt;Parent&gt;DOM Tree&lt;/Parent&gt;</code>
        </div>

        <h3>Context</h3>
        <Context />
    	</div>
    );
  }
}

export default Index;