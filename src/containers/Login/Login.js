import React, { Component } from 'react';
import { login } from '../../services/Api';
import { setSession } from '../../services/Storage';
import AuthForm from '../../components/AuthForm/AuthForm';

export default class Login extends Component {
  state = {};

  onSubmit = ({ email, password }) => {
    this.setState({ isLoading: true });

    login({ email, password })
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
        <h3>Login</h3>
        <AuthForm
          onSubmit={this.onSubmit}
          isLoading={isLoading}
        />
      </div>
    );
  }
}
