import React, { Component } from 'react';

import './Filter.css';

export default class Filter extends Component {
  state = { value: '' };

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });

    this.props.onChange(event.target.value);
  }

  render () {
    const { placeholder } = this.props;
    const { value } = this.state;

    return (
      <input
        className="filter"
        placeholder={placeholder}
        value={value}
        onChange={this.onChange}
      />
    );
  }
}
