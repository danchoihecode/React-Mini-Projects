import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
export default function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    function processLogin() {
        // alert("login, username = " + username + ", password = " + password);
        axios.post("http://localhost:8080/", {}, {
            auth: {
                username: username,
                password: password

            }
        })
            .then(res => {
                console.log("login successfully, res = ", res);
                let token = res.headers["x-auth-token"];
                localStorage.setItem('token', token);
                navigate('/');
            })
            .catch(err => {
                console.log("login failed, err = ", err);
            })
    }
    return (
        <div>
            <TextField label="username" onChange={(e) => setUsername(e.target.value)}>
            </TextField>
            <TextField label="password" onChange={(e) => setPassword(e.target.value)}>
            </TextField>
            <Button onClick={processLogin}>Login</Button>
        </div>
    )
}