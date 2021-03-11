import React from "react";
import { Link } from "react-router-dom";
import bg from "../../Components/bgVideo.mp4";


const NotAuth = () => {
  return (
    <div>
     {/* Background video */}
     <video autoPlay muted loop id="bgVideo">
     <source src={bg} type="video/mp4" />
    </video>
    
    <div className="content">
      <div className="row">
        <div className="col-md-12">
            <h1>You are not authorized to visit this page!</h1>
            <div><Link to="/">Please Make an Account</Link>,  <Link to="/login">Or Sign-in</Link></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotAuth;