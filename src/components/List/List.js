import React, { Component } from 'react';
import Filter from '../Filter/Filter';

import './List.css';

export default class List extends Component {
  state = {
    filtered: this.props.list,
  };

  onChange = (value) => {
    this.setState({
      filtered: this.props.list.filter(element => (
       this.props.onFilter(value, element)
      ))
    })
  }

  render () {
    const {
      title,
      placeholder,
      listComponent,
    } = this.props;
    const { filtered } = this.state;

    const ListComponent = listComponent;

    return (
      <div className="list">
        <h3>
          {title}
        </h3>
        <Filter
          placeholder={placeholder}
          onChange={this.onChange}
        />
        <div className="elems">
          {filtered.map(item => <ListComponent item={item} />)}
        </div>
      </div>
    );
  }
};
