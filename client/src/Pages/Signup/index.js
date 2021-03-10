import React, {useState} from "react";
import "./style.css"
import API from "../../utils/API"
import { useHistory } from "react-router-dom";

function Signup() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const history = useHistory();


const register = function () {
    API.registerUser({
        username : registerUsername,
        password: registerPassword
    }).then(()=>{
        // console.log("go to login")
        history.push("/login");
    })
}


return (
    <div>
        <h1>Register</h1>
        <input placeholder = "username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder = "password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
    </div>
);

}
export default Signup;