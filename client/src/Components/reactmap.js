import React, { useState, useEffect } from "react";
import ReactMapGL, {Layer} from "react-map-gl";
import {styleLayer} from "./map-style"

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
    >
        <Layer {...styleLayer}/>

    </ReactMapGL>
  );
}

export default Map;
