// src/components/EventList.js
import axios from '../axiosConfig'; 
import React, { useState, useEffect } from 'react';


const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Mock data for now
        const mockEvents = [
            { id: 1, eventName: 'Event 1', date: '2024-07-01', time: '10:00', location: 'Location 1' },
            { id: 2, eventName: 'Event 2', date: '2024-07-05', time: '14:00', location: 'Location 2' },
        ];
        setEvents(mockEvents);

        // Uncomment and modify this section to fetch data from the backend
        // const fetchEvents = async () => {
        //     try {
        //         const token = localStorage.getItem('token');
        //         const response = await axios.get('/api/events', {
        //             headers: { Authorization: Bearer ${token} }
        //         });
        //         setEvents(response.data);
        //     } catch (error) {
        //         console.error('Error fetching events:', error);
        //     }
        // };
        // fetchEvents();
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h3>{event.eventName}</h3>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
