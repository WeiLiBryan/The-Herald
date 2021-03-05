import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7406,
    longitude: -122.4217,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic3BlbnJhZCIsImEiOiJja2x3bWZoc2EwMGFwMnVxa3NueXZmMHlnIn0.m_FPTC7C4JhyOtzp2KwcKg"
      mapStyle= 'mapbox://styles/mapbox/light-v9'
      onViewportChange={viewport => {
          setViewport(viewport);
      }}
    ></ReactMapGL>
  );
}

export default Map;
