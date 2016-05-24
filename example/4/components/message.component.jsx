import React from 'react';

import {FormGroup, FormControl, Alert} from 'react-bootstrap';

import FilterForm from './filter.component';

const Button = React.createClass({
	contextTypes: {
		btnClass: React.PropTypes.string
	},
  onClick() {
    this.props.onClick && this.props.onClick();
    return false;
  },
	render() {
		return (
      <button onClick={this.onClick} className={'btn ' + this.context.btnClass}>
        {this.props.children}
      </button>
    );
	}
});

const Message = React.createClass({
  contextTypes: {
    removeMessage: React.PropTypes.func
  },
  handleDelete(e) {
    // console.log(this.props.index);
    this.context.removeMessage( this.props.index );
    return false;
  },
  render() {
    return (
      <div>
      {this.props.msg.text} <span>{this.props.msg.create_time}</span><Button onClick={this.handleDelete}>Delete</Button>
      </div>
    );
  }
});

const MessageForm = React.createClass({
  getInitialState() {
      return {
          text: ''  
      };
  },
  handleChange(e) {
    let target = e.target;
    let name = target.getAttribute('name');

    let value = target.value;

    let tmpObj = {};

    tmpObj[name] = value;

    this.setState(tmpObj);
  },
  handleSubmit(e) {
    e.preventDefault();

    let data = {
      text: this.state.text,
      create_time: '2016-05-22 12:22:35'
    };

    if( data.text ) {
      this.props.onSubmit( data );

      this.setState({
        text: ''
      });
    }
    // console.log(data);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" name="text" placeholder="Input message" value={this.state.text} onChange={this.handleChange} />
        </FormGroup>
        <Button>Add</Button>
      </form>
    );
  }
});

const MessageList = React.createClass({
  childContextTypes: {
    btnClass: React.PropTypes.string,
    removeMessage: React.PropTypes.func
  },
  getChildContext() {
    return {
      btnClass: "btn-default",
      removeMessage: this.props.onDeleteMessage
    };
  },
  handleAlertDismiss() {
    this.props.onErrorClose();
  },
  render() {
    let children = this.props.messages.map(function(message, index) {
      let id = message.id || index;
      return <Message msg={message} index={id} key={index} />;
    });

    let alert;

    if(this.props.getTime.loading){
      alert = <Alert bsStyle="warning">
          获取时间中...
        </Alert>
    } else if(this.props.getTime.errorInfo){
      alert = <Alert bsStyle="danger">
          获取时间失败。{this.props.getTime.errorInfo} <Button onClick={this.handleAlertDismiss}>Close</Button>
        </Alert>
    }
    return (
      <div>
        {alert}
        <MessageForm onSubmit={this.props.onAddMessage} />
        {children}
        <FilterForm onChange={this.props.onChangeFilterKey} />
      </div>
    );
  }
});

export default MessageList;