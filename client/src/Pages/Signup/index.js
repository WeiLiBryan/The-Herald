import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import bg from "../../Components/bgVideo.mp4";

function Signup() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const history = useHistory();

  const register = function () {
    API.registerUser({
      username: registerUsername,
      password: registerPassword,
    }).then(() => {
      // console.log("go to login")
      history.push("/login");
    });
  };

  return (
    <div className="registerContainer">

      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <div className="content">
        <div className="info div-box">
          <h2><span className="infoTitle">WELCOME TO THE HERALD</span></h2>
          <h3>YOUR HUB FOR GLOBAL NEWS</h3>
        </div>

        <div className="div-box">
          <h1>Register</h1>
          <input
            className="RegisterForm"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            className="RegisterForm"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Submit</button>
          <hr />
          <a href="/login"><h6>Already Registered?</h6></a>
        </div>
      </div>
    </div>
  );
}
export default Signup;
