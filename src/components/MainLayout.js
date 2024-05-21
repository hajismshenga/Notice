// src/components/MainLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

function MainLayout() {
  const username = 'John Doe'; // Replace with dynamic username from your auth context
  const userInitials = username.split(' ').map(name => name[0]).join('').toUpperCase();

  return (
    <div className="main-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/new-notice">New Notice</Link></li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="profile-header">
          <div className="profile-picture">{userInitials}</div>
          <span className="username">{username}</span>
        </header>
        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default MainLayout;
