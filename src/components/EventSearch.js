import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [events, setEvents] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/events/search', {
                params: { name: searchTerm }
            });
            setEvents(response.data);
        } catch (error) {
            console.error('Error searching events:', error);
        }
    };

    return (
        <div>
            <h2>Search Events</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search events by name"
                    required
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>{event.eventName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventSearch;
