import React from "react";
import { Link } from "react-router-dom";


const NotAuth = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="hero">
            <h1>You are not authorized to visit this page!</h1>
            <div><Link to="/">Please Make an Account</Link>,  <Link to="/login">Or Sign-in</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAuth;