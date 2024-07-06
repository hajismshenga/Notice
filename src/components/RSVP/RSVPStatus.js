import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RSVPStatus = ({ eventId }) => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRSVPStatus = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`/api/events/${eventId}/rsvp/status`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setStatus(response.data.status);
            } catch (error) {
                console.error('Error fetching RSVP status:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRSVPStatus();
    }, [eventId]);

    if (loading) return <p>Loading...</p>;

    return <p>Your RSVP Status: {status}</p>;
};

export default RSVPStatus;
