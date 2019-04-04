import React, { Component } from 'react';
import { signup } from '../../services/Api';
import { setSession } from '../../services/Storage';
import AuthForm from '../../components/AuthForm/AuthForm';

export default class Signup extends Component {
  state = {};

  onSubmit = () => {
    this.setState({ isLoading: true });

    signup({ email: this.state.email, password: this.state.password })
      .then(response => {
        setSession(response.token);
        window.location.replace('/');
      })
      .catch(() => this.setState({ isLoading: false }));
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          onSubmit={this.onSubmit}
          isLoading={isLoading}
        />
      </div>
    );
  }
}
