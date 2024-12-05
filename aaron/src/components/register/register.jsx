import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import "./register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/admin/register', {
        firstName,
        middleName,
        lastName,
        email,
        contactNo,
        password
      });

      if (response.data.message === "User created") {
        const loginResponse = await axios.post('/admin/login', {
          email,
          password
        });

        if (loginResponse.data.access_token) {
          login(loginResponse.data.user, loginResponse.data.access_token);
          navigate("/dashboard");
        } else {
          setError('Registration successful, but login failed.');
        }
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src="/aaronLogo.png" alt="Aaron Logo" className="logo" />
        </div>
        <h1 className="welcome-text">Create Account</h1>
        {error && <div className="error-message">{error}</div>}
        
        <div className="input-group">
          <label className="input-label">First Name</label>
          <input 
            type="text" 
            placeholder="Enter your first name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Middle Name</label>
          <input 
            type="text" 
            placeholder="Enter your middle name" 
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Last Name</label>
          <input 
            type="text" 
            placeholder="Enter your last name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Contact Number</label>
          <input 
            type="tel" 
            placeholder="Enter your contact number" 
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Confirm Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Confirm your password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <div className="show-password">
          <input 
            type="checkbox" 
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        
        <button className="signin-button" onClick={handleRegister}>
          Register
        </button>
        
        <div className="register-link" onClick={() => navigate('/login')}>
          Already have an account? <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
