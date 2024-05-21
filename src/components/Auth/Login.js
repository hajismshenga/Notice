// src/components/Auth/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService'; // Import the login function
import './Login.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(username, password); // Call the login function
      // Redirect user to dashboard or appropriate page based on user role
      navigate(`/dashboard/${user.role.toLowerCase()}`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to the Student Notice Management System</h2>
      <p>This system allows you to manage and view notices within the university.</p>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <div className="register">
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
        {error && <div className="error">{error}</div>} {/* Display error message */}
      </div>
    </div>
  );
}

export default Login;
