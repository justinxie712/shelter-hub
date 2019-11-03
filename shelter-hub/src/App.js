import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import SideNav from './SideNav/SideNav'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <React.Fragment>

      <div className="App">

        <Login />
        {/* <Overview /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
