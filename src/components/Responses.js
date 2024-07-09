import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const Responses = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/events/all', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            {events.length === 0 ? (
                <p>No events available yet.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <p>Event Name: {event.name}</p>
                            <p>Description: {event.description}</p>
                            <p>Date: {event.date}</p>
                            <p>Time: {event.time}</p>
                            <p>Location: {event.location}</p>
                            <p>Details: {event.details}</p>
                            <a href={`/event/${event.id}`}>View Details</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Responses;
