import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import API from "./API";
import NotAuth from "../Pages/NotAuth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const [loggedIn, setLoggedIn] = useState({
      loggedIn: false,
      redirect: false
  });

  useEffect(() => {
    console.log("API", API);
    API.authUser().then(function (res) {
        console.log("logged in???", res.data)
      // console.log("are you logged in???", res.data)
      setLoggedIn(res.data);
    });
  }, [loggedIn]);
  

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <NotAuth />
      }
    />
  );
};

export default PrivateRoute;
