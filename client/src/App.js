import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import MapPage from "./Pages/Map"
import NewsFeed from "./Pages/Profile"
import API from "./utils/API"

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("API", API);
    API.authUser().then( function (res) {
      console.log("WHO GOES THERE ========>", res)
    })
  }, []);


  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component = {Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Map" component = {MapPage} />
        <Route exact path="/Profile" component = {NewsFeed} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
