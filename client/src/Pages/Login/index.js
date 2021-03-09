import React, {useState} from "react";
import "./style.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";


function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const history = useHistory();

const login = function () {
    API.loginUser({
        username : loginUsername,
        password : loginPassword
    }).then(()=>{
        console.log("helllllo")
        history.push("/map");
    })
}

return (
    <div>
        <h1>Login</h1>
        <input placeholder = "username" onChange={e => setLoginUsername(e.target.value)}/>
        <input placeholder = "password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login} >Submit</button>
    </div>
);

}

export default Login;