import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
    const { id } = useParams(); // Get event ID from URL
    const [event, setEvent] = useState(null);
    const [rsvpStatus, setRsvpStatus] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event details:', error);
            }
        };
        fetchEvent();
    }, [id]);

    const handleRSVP = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/events/${id}/rsvp`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setRsvpStatus('You have successfully RSVPed to the event.');
        } catch (error) {
            console.error('Error RSVPing to the event:', error);
            setRsvpStatus('Error RSVPing to the event.');
        }
    };

    if (!event) return <p>Loading...</p>;

    return (
        <div>
            <h2>{event.eventName}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            {rsvpStatus ? <p>{rsvpStatus}</p> : <button onClick={handleRSVP}>RSVP</button>}
        </div>
    );
};

export default EventDetail;
