import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import SideNav from './SideNav/SideNav';
import Registration from './Registration/Registration';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <React.Fragment>
      {isLoggedIn && <SideNav />}
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>ShelterHub</h1> */}
        {/* <Login /> */}
        <Overview />
        {/* <Registration /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
