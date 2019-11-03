import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>ShelterHub</h1>
      {/* <Login /> */}
      <Overview />
    </div>
  );
}

export default App;
