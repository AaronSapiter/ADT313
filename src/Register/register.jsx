import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="register">
            <h2>REGISTER</h2>
            <hr />
            <input type="email" placeholder="Email" />
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" />
            <div className="show-password">
                <input
                    name="Show password"
                    type="checkbox"
                    id="showPassword"
                    onChange={() => setPasswordVisible(!passwordVisible)}
                />
                <label htmlFor="showPassword">Show Password</label>
            </div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Contact Number" />
            <button className="confirm">CONFIRM</button>
            <Link to="/login">
                <button className="secondary">Already have an account</button>
            </Link>
        </div>
    );
}

export default Register;
