import React from 'react';

import {FormGroup, FormControl} from 'react-bootstrap';

const FilterForm = React.createClass({
  getInitialState() {
      return {
          key: ''  
      };
  },
  handleInput(e) {
    let target = e.target;
    let name = target.getAttribute('name');

    let value = target.value;

    let tmpObj = {};

    tmpObj[name] = value;

    this.setState(tmpObj);

    this.props.onChange(value);

    console.log(value);
  },
  handleSubmit(e) {
    e.preventDefault();
	},
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl type="text" name="key" placeholder="Search" value={this.state.key} onInput={this.handleInput} />
        </FormGroup>
      </form>
    );
  }
});

export default FilterForm;