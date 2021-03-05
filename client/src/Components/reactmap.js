import React, { useState } from "react";
import ReactMapGL, {Layer, Source} from "react-map-gl";
import {styleLayer} from "./map-style"

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7406,
    longitude: -122.4217,
    width: "100vw",
    height: "100vh",
    zoom: 2,
    minZoom: 2
  });

  console.log(ReactMapGL)

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic3BlbnJhZCIsImEiOiJja2x3bWZoc2EwMGFwMnVxa3NueXZmMHlnIn0.m_FPTC7C4JhyOtzp2KwcKg"
      mapStyle= 'mapbox://styles/mapbox/light-v9'
      onViewportChange={viewport => {
          setViewport(viewport);
      }}
    >
        <Source type= 'vector' url= 'mapbox://byfrost-articles.74qv0xp0'>
        <Layer {...styleLayer}/>
        </Source>

    </ReactMapGL>
  );
}

export default Map;
