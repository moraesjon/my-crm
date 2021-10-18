import React from 'react';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;