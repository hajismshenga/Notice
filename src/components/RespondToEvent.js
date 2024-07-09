import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { useSearchParams } from 'react-router-dom';

const RespondToEvent = () => {
    const [searchParams] = useSearchParams();
    const eventId = searchParams.get('eventId');
    const token = searchParams.get('token');
    const [response, setResponse] = useState('');
    const [message, setMessage] = useState('');

    const handleResponse = async (response) => {
        try {
            const res = await axios.get(`/api/events/respond`, {
                params: {
                    eventId: eventId,
                    token: token,
                    response: response
                }
            });
            setMessage(res.data);
        } catch (error) {
            setMessage('Failed to record response. Please try again.');
        }
    };

    return (
        <div>
            <h2>Respond to Event</h2>
            <p>{message}</p>
            <button onClick={() => handleResponse('confirmed')}>Confirm</button>
            <button onClick={() => handleResponse('declined')}>Decline</button>
        </div>
    );
};

export default RespondToEvent;
