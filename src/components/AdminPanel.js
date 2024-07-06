import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const eventsResponse = await axios.get('/api/admin/events', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const usersResponse = await axios.get('/api/admin/users', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setEvents(eventsResponse.data);
                setUsers(usersResponse.data);
            } catch (error) {
                console.error('Error fetching data for admin panel:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Panel</h2>
            <div>
                <h3>Events</h3>
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <strong>{event.eventName}</strong>: {event.date} at {event.time}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Users</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <strong>{user.username}</strong> ({user.email})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;
