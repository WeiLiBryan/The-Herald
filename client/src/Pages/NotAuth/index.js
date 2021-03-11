import React from "react";
import { Link } from "react-router-dom";
import bg from "../../Components/bgVideo.mp4";
import "./style.css"


const NotAuth = () => {
  return (
    <div className="nonAuth">
     {/* Background video */}
     <video autoPlay muted loop id="bgVideo">
     <source src={bg} type="video/mp4" />
    </video>
    
    <div className="content">
            <h1 id="nonAuthtext">You are not authorized to visit this page!</h1>
            <div id="nonAuthtext"><Link to="/" id="nonAuthredir">Please Make an Account</Link><br/><Link to="/login" id="nonAuthredir">Or Sign-in</Link></div>
        </div>
      </div>
  );
};

export default NotAuth;