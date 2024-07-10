import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('/api/events/all');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Event Dashboard</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/event/${event.id}`}>{event.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
