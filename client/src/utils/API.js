import axios from "axios";

export default {
    newsArticles: function(search, date) {
        return axios.get("https://newsapi.org/v2/everything?qInTitle=" + search + date +"&language=en&sortBy=popularity&apiKey=e0f07ff44c4a4914a78bf913d06b2a60")
    },

    newsArticlesProfile: function(search) {
        return axios.get("https://newsapi.org/v2/everything?qInTitle=" + search +"&language=en&sortBy=popularity&apiKey=e0f07ff44c4a4914a78bf913d06b2a60")
    },

    // NOTE: axios routes are for development only, add a ternary statement or update once in production
    registerUser : function (info) {
        return axios.post("http://localhost:8080/api/signup", info)
    },

    loginUser: function (info) {
        return axios.post("http://localhost:8080/api/login", info, {
            withCredentials: true
          })
    },

    updateTopic : function (info) {
        return axios.put("http://localhost:8080/api/update", info, {
            withCredentials: true
          })
    },

    authUser: function () {
        return axios.get("http://localhost:8080/api/checkAuthentication", {
            withCredentials: true
          })
    },

    getUserInfo: function () {
        return axios.get("http://localhost:8080/api/userTopics", {
            withCredentials: true
          } )
    },

    logoutUser: function () {
        return axios.get("http://localhost:8080/logout", {
            withCredentials: true
          } )
    }
}
