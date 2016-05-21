import React from 'react';

import {FormGroup, FormControl} from 'react-bootstrap';

const Button = React.createClass({
	contextTypes: {
		btnClass: React.PropTypes.string
	},

	render() {
		return (
      <button className={'btn ' + this.context.btnClass}>
        {this.props.children}
      </button>
    );
	}
});

const Message = React.createClass({
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
});

const MessageForm = React.createClass({
  render() {
    return (
      <form>
        <FormGroup>
          <FormControl type="text" placeholder="Normal text" />
        </FormGroup>
        <Button>Add</Button>
      </form>
    );
  }
});

const MessageList = React.createClass({
  childContextTypes: {
    btnClass: React.PropTypes.string
  },
  getChildContext() {
    return {btnClass: "btn-default"};
  },
  render() {
    let children = this.props.list.map(function(message, index) {
      return <Message text={message.text} key={index} />;
    });
    return (
      <div>
        <MessageForm />
        {children}
      </div>
    );
  }
});

export default MessageList;