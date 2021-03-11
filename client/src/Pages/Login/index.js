import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import bg from "../../Components/bgVideo.mp4";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();

  const login = function () {
    API.loginUser({
      username: loginUsername,
      password: loginPassword,
    }).then(() => {
      // console.log("helllllo")
      history.push("/map");
    });
  };

  return (
    <div className="signUpContainer">
      {/* Background video */}
      <video autoPlay muted loop id="bgVideo">
        <source src={bg} type="video/mp4" />
      </video>

      <div className="content">
        <div className="login div-box content">
          <h1>Login</h1>
          <input
            className="signForm"
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            className="signForm"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <button onClick={login}>Submit</button>
          <hr />
          <a href="/">
            <h6>Don't Have An Account?</h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
