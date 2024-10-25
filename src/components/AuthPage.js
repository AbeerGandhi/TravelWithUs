import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./AuthPage.css"; // Import the associated CSS for styling

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]); // To store registered users

  const navigate = useNavigate(); // Create navigate instance

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!isLogin) {
      // Signup
      // Validate password matching
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match!");
        return;
      }

      // Check if the user already exists
      const userExists = registeredUsers.find((user) => user.username === username || user.email === email);
      if (userExists) {
        setErrorMessage("User with this username or email already exists!");
        return;
      }

      // Add new user to registeredUsers list
      setRegisteredUsers([...registeredUsers, { username, email, password }]);
      setErrorMessage("Signup successful! Please log in.");
      setIsLogin(true);
    } else {
      // Login
      const user = registeredUsers.find(
        (user) => (user.username === username || user.email === email) && user.password === password
      );

      if (!user) {
        setErrorMessage("Invalid username/email or password.");
      } else {
        setErrorMessage("Login successful! Redirecting...");
        // Redirect to the main page (App.js) after successful login
        navigate("/home"); // Navigates to the home page, which is App.js
      }
    }

    // Reset form fields
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="auth-page">
      <div className="auth-container">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
};
