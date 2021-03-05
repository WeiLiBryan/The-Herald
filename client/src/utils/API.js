import axios from "axios";

export default {
    newsArticles: function(search) {
        return axios.get("https://newsapi.org/v2/everything?qInTitle=" +search+ "&sortBy=publishedAt&apiKey=e0f07ff44c4a4914a78bf913d06b2a60")
    }
}