import React, { useState, useEffect } from "react";
import "./style.css";
import Map from "../../Components/reactmap";
import Popup from "../../Components/Popup";
import API from "../../utils/API";

function MapPage() {
  const [articles, setArticles] = useState([]);
  const [displayState, setDisplayState] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [date, setDate] = useState("");
  
  const { DateTime } = require("luxon");
  const now = DateTime.now();

  const articleSet = (data) => {
    setArticles(data);
  };

  const changeDisplayState = (bool) => {
    setDisplayState(bool);
  };

  const Subscribe = function () {
    API.updateTopic(currentCountry);
  };

  const dateTime = function (str) {
    setDate(str)
  }
  
  useEffect(function () {
    API.newsArticles(currentCountry, date).then(function (res) {
      // console.log("news articles", res.data.articles);
      let data = res.data.articles;
      articleSet(data);
    });
}, [date]);


  

  return (
    <div>
      <div
        className="popup"
        style={{
          display: displayState ? "block" : "none",
        }}
      >
        <button onClick={Subscribe}>Subscribe</button>
        <button onClick={()=>dateTime("&from=" + now.toISODate())}>Daily</button>
        <button onClick={()=>dateTime("&from=" + now.plus({ days: -7 }).toISODate())}>Weekly</button>
        <button onClick={()=>dateTime("&from=" + now.plus({ days: -28 }).toISODate())}>Monthly</button>

        {articles.splice(0, 5).map((item, index) => {
          return (
            <Popup
              key={index}
              title={item.title}
              content={item.content}
              description={item.description}
              author={item.author}
              image={item.urlToImage}
              link={item.url}
            />
          );
        })}
      </div>

      <Map
        articleSet={articleSet}
        changeDisplayState={changeDisplayState}
        setCurrentCountry={setCurrentCountry}
        currentCountry={currentCountry}
        date={date}
      />
    </div>
  );
}

export default MapPage;
