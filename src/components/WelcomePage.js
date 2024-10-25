// src/pages/WelcomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css"; // Add your styles here

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/auth"); // Redirect to auth page for login/signup
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to TravelWithUs</h1>
      <button onClick={handleStart}>Get Started</button>
    </div>
  );
};
