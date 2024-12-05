import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/admin/login', {
        email: email,
        password: password
      });

      if (response.data.access_token) {
        login(response.data.user, response.data.access_token);
        navigate("/dashboard");
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src="/aaronLogo.png" alt="Aaron Logo" className="logo" />
        </div>
        <h1 className="welcome-text">Welcome Back</h1>
        {error && <div className="error-message">{error}</div>}
        
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
          <label className="input-label">Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="show-password-container">
          <div className="show-password">
            <input 
              type="checkbox" 
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
        </div>
        
        <button className="signin-button" onClick={handleLogin}>
          Sign In
        </button>
        
        <div className="register-link" onClick={() => navigate('/register')}>
          Don't have an account? <span>Register Now</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
