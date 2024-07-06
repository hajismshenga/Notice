import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RSVPList = ({ eventId }) => {
    const [rsvps, setRsvps] = useState([]);

    useEffect(() => {
        const fetchRSVPs = async () => {
            try {
                const response = await axios.get(`/api/events/${eventId}/rsvps`);
                setRsvps(response.data);
            } catch (error) {
                console.error('Error fetching RSVPs:', error);
            }
        };
        fetchRSVPs();
    }, [eventId]);

    return (
        <div>
            <h2>RSVP List</h2>
            <ul>
                {rsvps.map((rsvp, index) => (
                    <li key={index}>{rsvp.username}: {rsvp.response}</li>
                ))}
            </ul>
        </div>
    );
};

export default RSVPList;
