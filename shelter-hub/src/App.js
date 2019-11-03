import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import SideNav from './SideNav/SideNav';
import Registration from './Registration/Registration';
import BedCounter from './BedCounter/BedCounter';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          {isLoggedIn && <SideNav />}
          <Switch>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/registration" exact={true} component={Registration}></Route>
            <Route path="/overview" exact={true} component={Overview}></Route>
            <Route path="/bedCounter" exact={true} component={BedCounter}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Overview /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
