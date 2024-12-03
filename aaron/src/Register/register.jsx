import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost/movieproject-api/register.php', {
                email,
                password,
                firstName,
                middleName,
                lastName,
                contactNo,
                role: 'user'
            });

            if (response.data.status === 'success') {
                alert('good');
                // Optionally navigate to login page
                // navigate('/login');
            } else {
                alert('bad');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('bad');
        }
    };

    return (
        <div className="register">
            <h2>REGISTER</h2>
            <hr />
            <form onSubmit={handleRegister}>
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
                        name="Show password"
                        type="checkbox"
                        id="showPassword"
                        onChange={() => setPasswordVisible(!passwordVisible)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Middle Name" 
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Contact Number" 
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    required 
                />
                <button type="submit" className="confirm">CONFIRM</button>
                <Link to="/login">
                    <button type="button" className="secondary">Already have an account</button>
                </Link>
            </form>
        </div>
    );
}

export default Register;
