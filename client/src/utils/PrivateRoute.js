import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import API from "./API";

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
        loggedIn ? <Component {...props} /> : <div><Link to="/">Make an Account</Link> <Link to="/login">Or Sign-in</Link></div>
      }
    />
  );
};

export default PrivateRoute;
