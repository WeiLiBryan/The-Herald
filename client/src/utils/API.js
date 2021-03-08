import axios from "axios";

export default {
    newsArticles: function(search, category, weekly) {
        
        return axios.get("https://newsapi.org/v2/everything?qInTitle=" +search+ "&language=en&sortBy=popularity&from=2021-03-01&apiKey=e0f07ff44c4a4914a78bf913d06b2a60")
    },

    // NOTE: axios routes are for development only, add a ternary statement or update once in production
    registerUser : function (info) {
        return axios.post("http://localhost:8080/api/signup", info)
    },

    loginUser: function (info) {
        return axios.post("http://localhost:8080/api/login", info)
    }
}

