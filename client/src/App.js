import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import MapPage from "./Pages/Map"
import NewsFeed from "./Pages/Profile"
import PrivateRoute from "./utils/PrivateRoute"
import Navbar from "./Components/Navbar";

function App() {

    return (
      <div className="App">
       <Navbar/>
       <Router>
        <Switch>
          <Route exact path="/" component = {Signup} />
          <Route exact path="/Login" component={Login} />
          <PrivateRoute exact path="/Map" component = {MapPage} />
          <PrivateRoute exact path="/Profile" component = {NewsFeed} />
        </Switch>
      </Router>
      </div>
    );
  
  }


export default App;
