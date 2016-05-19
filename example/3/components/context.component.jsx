import React from 'react';

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

const MessageList = React.createClass({
  childContextTypes: {
    btnClass: React.PropTypes.string
  },
  getChildContext() {
    return {btnClass: "btn-default"};
  },
  render() {
    let children = ['Context 示例', '在祖先组件定义并设置值', '在子组件取得相应值'].map(function(message, index) {
      return <Message text={message} key={index} />;
    });
    return <div>{children}</div>;
  }
});

export default MessageList;