import React from 'react';
import './App.css';
import Notifications from './Notifications.jsx';
import holbertonLogo from './assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

const App = () => {
  return (
    <div className="app">
      <div className="root-notification">
        <Notifications />
      </div>
      <div className="App-header">
        <img className="logo" src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </div>
    </div>
  );
};

export default App;
