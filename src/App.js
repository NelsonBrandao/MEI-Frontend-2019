import 'whatwg-fetch';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Team from './containers/Team/Team';
import Teams from './containers/Teams/Teams';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import { getSession, setSession } from './services/Storage';

import './App.css';

class App extends Component {
  onLogout = () => {
    setSession(undefined);
    window.location.replace('/');
  }

  render() {
    const isAuthenticated = !!getSession();

    return (
      <div className="App">
        <Router>
          <Link className="header" to="/">
            Futebool All Time
          </Link>
          <div className="links">
            {!isAuthenticated
              ? (
                <React.Fragment>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">SignUp</Link>
                </React.Fragment>
              )
              : (
                <button onClick={this.onLogout}>
                  Logout
                </button>
              )}

          </div>
          <Route exact path="/" component={Teams} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
