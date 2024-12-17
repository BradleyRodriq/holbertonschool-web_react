import React from 'react';
import './App.css'; // Make sure to style the components according to the given requirements.
import holbertonLogo from './assets/holberton-logo.jpg'; // Replace with the actual path to your logo file.

const App = () => {
  return (
    <div className="app">
      <div className="App-header">
        <img className="logo" src={holbertonLogo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </div>
    </div>
  );
};

export default App;
