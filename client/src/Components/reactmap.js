import React, { useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { styleLayer } from "./map-style";
import API from "../utils/API.js";
import PopupDiv from "./Popup/index.js"

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7406,
    longitude: -122.4217,
    width: "100vw",
    height: "100vh",
    zoom: 2,
    minZoom: 2
  });

  const [articles, setArticles] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleCountrySel = function handleCountrySel(e) {
    setDisplay(true);
    var countryName = e.features[0].properties.NAME
    if (countryName === undefined) { return; }
    console.log("countryName", countryName);

    API.newsArticles(countryName).then(function (res) {
      let data = res.data.articles;

      setArticles(data);

      // console.log();
      // console.log(data);
      // articles.push(res);
      //   console.log("news articles", articles);


      // articles.map(article => {
      //   html += `
      //   <h3>${article.title}</h3>
      //   <ul class="news">
      //     <li><strong>Content:</strong> ${article.content}</li>
      //     <li><strong>Description:</strong> ${article.description}</li>
      //     <li><strong>Author:</strong> ${article.author}</li>
      //   </ul> \n
      //   `
      // });
    })
  };

  return (
    <div className="main">
      <div
        className="popup"
        style={{
          display: display ? "block" : "none"
        }}>

        {articles.splice(0, 5).map(item => {
          return (
            <PopupDiv
              display={display}
              id={0}
              title={item.title}
              content={item.content}
              description={item.description}
              author={item.author}
              image={item.urlToImage}
            />
          );
        })}
      </div>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic3BlbnJhZCIsImEiOiJja2x3bWZoc2EwMGFwMnVxa3NueXZmMHlnIn0.m_FPTC7C4JhyOtzp2KwcKg"
        mapStyle='mapbox://styles/mapbox/light-v9'
        onViewportChange={viewport => {
          setViewport(viewport);

        }}
        onClick={handleCountrySel}
      >
        <Source type='vector' url='mapbox://byfrost-articles.74qv0xp0'>
          <Layer {...styleLayer} />
        </Source>

      </ReactMapGL>
    </div>
  );
}

export default Map;
