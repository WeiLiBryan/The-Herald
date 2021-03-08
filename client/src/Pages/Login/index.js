import React, {useState} from "react";
import "./style.css";
import API from "../../utils/API";

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


const login = function (info) {
    API.loginUser({
        username : loginUsername,
        password : loginPassword
    });
}

return (
    <div>
        <h1>Login</h1>
        <input placeholder = "username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder = "password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
    </div>
);

}

export default Login;