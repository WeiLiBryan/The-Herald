import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList } from 'react-tabs';
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
        <button onClick={Subscribe}>Bookmark</button>
        <Tabs>
  <TabList>
    {/* MAPS THE SAVED COUNTRIES FOR TAB HEADERS*/}
    <Tab onClick={()=>dateTime("&from=" + now.toISODate())}>Daily</Tab>
    <Tab onClick={()=>dateTime("&from=" + now.plus({ days: -7 }).toISODate())}>Weekly</Tab>
    <Tab onClick={()=>dateTime("&from=" + now.plus({ days: -28 }).toISODate())}>Monthly</Tab>
  </TabList>
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
</Tabs>
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
