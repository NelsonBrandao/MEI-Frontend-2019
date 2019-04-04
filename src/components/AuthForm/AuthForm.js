import React, { Component } from 'react';

export default class AuthForm extends Component {
  state = {
    email: null,
    password: null,
  };

  setEmail = (event) => this.setState({ email: event.target.value });

  setPassword = (event) => this.setState({ password: event.target.value });

  onSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <label>
          Email: <input type="email" onChange={this.setEmail} />
        </label>
        <label>
          Password: <input type="password" onChange={this.setPassword} />
        </label>
        <button
          onClick={this.onSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    );
  }
}
