import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function NewsFeed() {
    const [userData, setUserData] = useState([]);
    const [articles, setArticles] = useState([]);

    const getUserData = function () {
        API.getUserInfo().then(function (res) {
            let filtered = res.data.topic.filter(element => element !== null);
            console.log("RESPONSE ==========>", filtered);
            setUserData(filtered);
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
        <Tabs>
            <TabList>
                {/* MAPS THE SAVED COUNTRIES FOR TAB HEADERS*/}
                {userData.map(country => {
                    console.log(country);
                    
                    return (
                        <Tab onClick={() => search(country)}>{country}</Tab>
                    );
                })}
                {/* <Tab>Hello</Tab> */}
            </TabList>

                {/* SEARCHES API WITH COUNTRY NAME AND OUTPUTS THE ARTICLES HERE */}
            {articles.splice(0, 5).map((article, index) => {
                console.log("article ======> ", article)
                return(
                <div key={index}>
                    <h5>{article.title}</h5>
                    <h6>{article.author}</h6>
                    <p>{article.description}</p>
                </div>);
            })}

        </Tabs>
    );
}

export default NewsFeed;
