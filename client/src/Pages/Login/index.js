import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

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
      <div className="login">
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
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={login}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
