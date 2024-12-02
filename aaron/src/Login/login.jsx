import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="login">
            <h2>LOGIN</h2>
            <input type="email" placeholder="Email" />
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" />
            <div className="show-password">
                <input
                    type="checkbox"
                    id="showPassword"
                    onChange={() => setPasswordVisible(!passwordVisible)}
                />
                <label htmlFor="showPassword">Show Password</label>
            </div>
            <button className="confirm">CONFIRM</button>
            <Link to="/register">
                <button className="secondary">Create account</button>
            </Link>
        </div>
    );
}

export default Login;
