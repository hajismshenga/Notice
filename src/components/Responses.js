// src/pages/Responses.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Responses = () => {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/responses', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setResponses(response.data);
            } catch (error) {
                console.error('Error fetching responses:', error);
            }
        };
        fetchResponses();
    }, []);

    return (
        <div>
            <h2>Responses</h2>
            {responses.length === 0 ? (
                <p>No responses available yet.</p>
            ) : (
                <ul>
                    {responses.map((response) => (
                        <li key={response.id}>
                            <p>Event: {response.eventName}</p>
                            <p>User: {response.username}</p>
                            <p>Status: {response.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Responses;
