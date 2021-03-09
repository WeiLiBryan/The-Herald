import React from "react";
import "./style.css"
import Map from "../../Components/reactmap";
import API from "../../utils/API";

function MapPage () {
    const loggedIn = function () {
        API.authUser().then (function (res) {
            console.log("this person is totally logged in", res)
        })
    }
    
    return (
        <div><Map />
        <button onClick={loggedIn}>Logged in?</button></div>
    )
}

export default MapPage