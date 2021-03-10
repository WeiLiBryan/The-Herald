import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

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
      <div className="Register">
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
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={register}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Signup;
