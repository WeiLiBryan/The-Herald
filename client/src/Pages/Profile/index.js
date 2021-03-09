import React, { useEffect } from "react";
import "./style.css"
import API from "../../utils/API"



function Profile () {
    
    useEffect(() => {
        API.getUserInfo()
      }, []);
    
    return (
        <div>user profile
        </div>
    )
}

export default Profile