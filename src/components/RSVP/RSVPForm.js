import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = ({ eventId }) => {
    const [response, setResponse] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post(`/api/events/${eventId}/rsvp`, { response }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage('Your response has been recorded.');
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            setMessage('Failed to submit RSVP.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>RSVP for Event</h2>
            <label>
                Response:
                <select value={response} onChange={(e) => setResponse(e.target.value)} required>
                    <option value="">Select</option>
                    <option value="accept">Accept</option>
                    <option value="decline">Decline</option>
                    <option value="maybe">Maybe</option>
                </select>
            </label>
            <button type="submit">Submit</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RSVPForm;
