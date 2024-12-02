import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login/login";
import Register from "./Register/register";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

function Landing() {
  return (
    <div className="landing">
      <h1>MOVIE FLIX</h1>
      <div className="landing-buttons">
        <Link to="/register">
          <button>REGISTER</button>
        </Link>
        <Link to="/login">
          <button>LOG IN</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
