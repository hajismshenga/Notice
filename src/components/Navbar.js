import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Event Management System</h1>
            <ul className="navbar-links">
                <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
                <li><Link to="/create-event" className="navbar-link">Create Event</Link></li>
                <li><Link to="/search-events" className="navbar-link">Search Events</Link></li>
                <li><Link to="/responses" className="navbar-link">Responses</Link></li>
                <li><Link to="/settings" className="navbar-link">Settings</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
