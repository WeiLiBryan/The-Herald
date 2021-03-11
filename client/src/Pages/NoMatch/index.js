import React from "react";
import bg from "../../Components/bgVideo.mp4";

const NoMatch = () => {
  return (
    <div>
    {/* Background video */}
    <video autoPlay muted loop id="bgVideo">
    <source src={bg} type="video/mp4" />
   </video>

    <div className="content">
      <h1>
        4<span role="img" aria-label="Globe Emoji">🌎</span>4 Page Not Found
      </h1>
    </div>
    </div>
  );
};

export default NoMatch;
