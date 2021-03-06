import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ClientPage from '../../pages/client/CustomersPage';
import RegisterPage from '../../pages/RegisterPage';


export default function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/home" component={ClientPage} />
          </div>
        </div>
      </Router>
    </div>

  );

}