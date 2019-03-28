import React, { Component } from 'react';
import Filter from '../Filter/Filter';

import './Team.css';

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
      <React.Fragment>
        <h3>
          {title}
        </h3>
        <Filter
          placeholder={placeholder}
          onChange={this.onChange}
        />
        <div className="players">
          {filtered.map(player => (
            <ListComponent player={player} />
          ))}
        </div>
      </React.Fragment>
    );
  }
};
