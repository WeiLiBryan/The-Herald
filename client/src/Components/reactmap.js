import React, { useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import { styleLayer } from "./map-style";
import API from "../utils/API.js";
import CarouselSlide from "./CarouselSlide"

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



  const handleCountrySel = function handleCountrySel(e) {
    var countryName = e.features[0].properties.NAME
    if (countryName === undefined) { return; }
    console.log("countryName", countryName);

    API.newsArticles(countryName).then(function (res) {
      let data = res.data.articles;

      setArticles([data]);

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
      <div className="popup">

        {articles.splice(0, 5).map(item => {
          return (

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <CarouselSlide 
                  id = {0}
                  title = {item.title}  
                  content = {item.content}
                  description = {item.description}
                  author = {item.author}
                  image = {item.urlToImage}
                />
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            // <PopupDiv 
            //   id = {0}
            //   title = {item.title}  
            //   content = {item.content}
            //   description = {item.description}
            //   author = {item.author}
            //   image = {item.urlToImage}
            // />
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
