import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";

function NewsFeed() {
  const [userData, setUserData] = useState([]);
  const [articles, setArticles] = useState([]);

  const getUserData = function () {
    API.getUserInfo().then(function (res) {
      console.log("RESPONSE ==========>", res.data.topic);
      setUserData(res.data.topic);
    });
  };

  useEffect(function () {
    getUserData();
  }, []);

  const search = (country) => {
    API.newsArticles(country).then((res) => {
      let data = res.data.articles;
      setArticles(data);
    });
  };

  return (
    <div>
      <Accordion>
        {userData.map(function (country, index) {
          return (
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={index}
                onClick={search(country)}
              >
                {/* Card Title */}
                {country}
              </Accordion.Toggle>

              <Accordion.Collapse eventKey={index}>
                {/* Card Body */}
                {articles.splice(0, 5).map((article) => {
                  return (
                    <div>
                      {article.title}
                      {article.author}
                    </div>
                  );
                })}
                ;
              </Accordion.Collapse>
            </Card>
          );
        })}
        ;
      </Accordion>
    </div>
  );
}

export default NewsFeed;
