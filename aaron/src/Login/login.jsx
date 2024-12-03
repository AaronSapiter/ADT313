import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/movieproject-api/login.php', {
                username: email,
                password: password
            });

            if (response.data.status === 'success') {
                alert('good');
                // Optionally navigate to another page
                // navigate('/dashboard');
            } else {
                alert('bad');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('bad');
        }
    };

    return (
        <div className="login">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type={passwordVisible ? "text" : "password"} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <div className="show-password">
                    <input
                        type="checkbox"
                        id="showPassword"
                        onChange={() => setPasswordVisible(!passwordVisible)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <div className="login-buttons">
                    <button type="submit" className="confirm">CONFIRM</button>
                    <Link to="/register">
                        <button type="button" className="secondary">Create account</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
