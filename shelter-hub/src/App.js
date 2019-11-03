import React, { useState } from 'react';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import SideNav from './SideNav/SideNav';
import Registration from './Registration/Registration';
import BedCounter from './BedCounter/BedCounter';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [bedCount, setBedCount] = useState(0);

  const getBDComp = () => {
    return (
      <BedCounter setBedCount={setBedCount} bedCount={bedCount}/>
    )
  }

  const getMap = () => {
    return (
      <Overview yourBedCount={bedCount}/>
    )
  }
 
  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          {isLoggedIn && <SideNav />}
          <Switch>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/registration" exact={true} component={Registration}></Route>
            <Route path="/overview" exact={true} component={() => getMap()}></Route>
            <Route path="/bedCounter" exact={true} component={() => getBDComp()}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Overview /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
