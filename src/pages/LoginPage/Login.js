import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // **Correct placement: inside the component, outside handleLogin**

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        try {
            const response = await axios.post("http://127.0.0.1:8000/login", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            localStorage.setItem("authToken", response.data.access_token);
            alert("Login Successful!");
            navigate('/home'); // Use navigate here
        } catch (error) {
            let errorMessage = "Login Failed: ";
            if (error.response?.data?.detail) {
                errorMessage += error.response.data.detail;
            } else if (error.message) {
                errorMessage += error.message;
            } else {
                errorMessage += "Unknown error";
            }
            alert(errorMessage);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;