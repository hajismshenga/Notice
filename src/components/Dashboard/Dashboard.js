// src/components/Dashboard/Dashboard.js
import React from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.userID}</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add functionality to view and manage repositories and notices */}
    </div>
  );
}

export default Dashboard;
