import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { MovieProvider } from './contexts/MovieContext';
import Login from "./components/login/login";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard/dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <UserProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </UserProvider>
    </Router>
  );
}

export default AppWrapper;
