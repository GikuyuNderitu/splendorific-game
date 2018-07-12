import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Room from './Room';


const LogoutInner = props => (
  <Redirect to="/" />
)

const Logout = LogoutInner;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={ Landing } />
              <Route exact path="/logout" component={ Logout } />
              <Route exact path="/dashboard" component={ Dashboard } />
              <Route path="/game/:id" component={ Room } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
