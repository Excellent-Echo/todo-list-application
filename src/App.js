import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Components/Home";
import UpdateProfile from "./Components/FormUpdateProfile";
// import Register from "./Components/FormRegister";
// import Login from "./Components/FormLogin";
// import Profil from "./Components/Profile";
// import Password from "./Components/FormUpdatePass"


function App() {
  return (
  <div>
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <link to="/FormUpdateProfile">UpdateProfile</link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/FormUpdateProfile">
              <UpdateProfile/>
            </Route>
          </Switch>
        </div>
      </header>
    </Router>
  </div>
  );
}

export default App;