import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";

function NewsFeed() {

    const [userData, setUserData] = useState();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        API.getUserInfo()
            // .then(res => {
            //     console.log("RES=================",res);
            //     setUserData(res);

            //     console.log("UserData=================", userData);
            // })
    });

    const search = (country) => {
        API.newsArticles(country)
            .then(res => {
                let data = res.data.articles;
                setArticles(data);

            })
    }

    return (
        <div>
            <Accordion>

                {userData.topic.map((country, index) => {
                    return(
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={index} onClick={search(country)}>
                                {/* Card Title */}
                                {country}
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={index}>
                                {/* Card Body */}
                                {articles.splice(0,5).map(article => {
                                    <div>
                                        {article.title}
                                        {article.author}
                                    </div>
                                })};
                            </Accordion.Collapse>
                        </Card>
                    );
                })};

            </Accordion>
        </div>
    );

}

export default NewsFeed;