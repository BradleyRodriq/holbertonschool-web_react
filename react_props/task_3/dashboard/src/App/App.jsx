import React from 'react';
import './App.css';
import Notifications from './Notifications.jsx';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

const App = () => {
  // Define the notifications list array
  const notificationsList = [
    { id: Math.random(), type: 'default', value: 'New course available' },
    { id: Math.random(), type: 'urgent', value: 'New resume available' },
    { id: Math.random(), type: 'urgent', value: '<strong>Urgent requirement</strong> - complete by EOD' },
  ];

  return (
    <div className="app">
      {/* Pass notificationsList as a prop */}
      <div className="root-notification">
        <Notifications notifications={notificationsList} />
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
