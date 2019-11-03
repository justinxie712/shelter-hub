import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Overview from './Overview/Overview';
import SideNav from './SideNav/SideNav';
import Registration from './Registration/Registration';
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
          <Switch>
            <Route path="/" exact={true} component={Login}></Route>
            <Route path="/Registration/Registration" exact={true} component={Registration}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Overview /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
