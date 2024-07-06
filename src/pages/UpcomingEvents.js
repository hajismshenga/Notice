import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RSVPForm from '../components/RSVP/RSVPForm';
import RSVPStatus from '../components/RSVP/RSVPStatus';

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Upcoming Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id} onClick={() => setSelectedEvent(event.id)}>
                        <h3>{event.eventName}</h3>
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                    </li>
                ))}
            </ul>
            {selectedEvent && (
                <div>
                    <RSVPForm eventId={selectedEvent} />
                    <RSVPStatus eventId={selectedEvent} />
                </div>
            )}
        </div>
    );
};

export default UpcomingEvents;