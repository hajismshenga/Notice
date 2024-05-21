// src/components/Auth/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Ensure this path is correct

function Register() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [userID, setUserID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here, e.g., API call to create user
    // For demonstration, we'll just log the user in
    login({ userID });
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Registration Number:</label>
          <input type="text" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} required />
        </div>
        <div>
          <label>User ID:</label>
          <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
