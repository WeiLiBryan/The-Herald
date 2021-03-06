import React, { useState } from "react";
import ReactMapGL, {Layer, Source} from "react-map-gl";
import {styleLayer} from "./map-style";
import API from "../utils/API.js";
import Popup from "./Popup/index.js" 

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



  const handleCountrySel = function handleCountrySel (e) {
    var countryName = e.features[0].properties.NAME
    console.log("countryName", countryName);
    API.newsArticles(countryName).then(function (res) {
      let articles = res.data.articles;

      if (!articles) {

      } else {
        console.log("news articles", articles);
        setArticles(articles);
        
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

      }
    })
  }; 

  // const onClick = (event => {
  //   // const country = event.features[0];
  //   const countryName = event.features[0].properties.NAME
  //   // console.log (country); 
  //   console.log (countryName);
  // })
  


  return (
    <div className="main">
      <div className="popup">
        {articles.map(item => {
          <Popup 
            title = {item.title}
            content = {item.content}
            description = {item.description}
            author = {item.author}
          />
        })}
      </div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic3BlbnJhZCIsImEiOiJja2x3bWZoc2EwMGFwMnVxa3NueXZmMHlnIn0.m_FPTC7C4JhyOtzp2KwcKg"
        mapStyle= 'mapbox://styles/mapbox/light-v9'
        onViewportChange={viewport => {
            setViewport(viewport);
            
        }}
        onClick={handleCountrySel}
      >
          <Source type= 'vector' url= 'mapbox://byfrost-articles.74qv0xp0'>
          <Layer {...styleLayer}/>
          </Source>

      </ReactMapGL>
    </div>
  );
}

export default Map;
