import 'whatwg-fetch';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Team from './containers/Team/Team';
import Teams from './containers/Teams/Teams';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link className="header" to="/">
            Futebool All Time
          </Link>
          <div className="links"></div>
          <Route exact path="/" component={Teams} />
          <Route path="/teams/:id" component={Team} />
        </Router>
      </div>
    );
  }
}

export default App;
