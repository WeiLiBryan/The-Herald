import React from "react";
import bg from "../../Components/bgVideo.mp4";
import "./style.css"

const NoMatch = () => {
  return (
    <div className="fourOhfour">
    {/* Background video */}
    <video autoPlay muted loop id="bgVideo">
    <source src={bg} type="video/mp4" />
   </video>

    <div className="content">
      <h1 id="fourOhtext">
        4<span role="img" aria-label="Globe Emoji">🌎</span>4 Page Not Found
      </h1>
    </div>
    </div>
  );
};

export default NoMatch;
