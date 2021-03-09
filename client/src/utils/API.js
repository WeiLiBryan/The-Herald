import axios from "axios";

export default {
    newsArticles: function(search, category, date) {
        
        return axios.get("https://newsapi.org/v2/everything?qInTitle=" +search+ "&language=en&sortBy=popularity&from=2021-03-01&apiKey=71fb2981b00b485081e52dd86b522482")
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
          })}
}
