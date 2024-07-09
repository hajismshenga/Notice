import axios from '../axiosConfig';
import React, { useState } from 'react';
import './CreateEvent.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        name: '',
        location: '',
        details: '',
        description: '',
        date: '',
        time: ''
    });
    const [inviteLink, setInviteLink] = useState('');
    const navigate = useNavigate(); // To navigate to the event detail page

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/events/add', {
                name: eventData.name,
                location: eventData.location,
                details: eventData.details,
                description: eventData.description,
                date: eventData.date,
                time: eventData.time
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Event created:', response.data);
            setInviteLink(response.data); // Set the invite link returned by the backend
            // Redirect to the event detail page
            const eventId = response.data.split("eventId=")[1].split("&")[0];
            navigate(`/event/${eventId}`); 
        } catch (error) {
            console.error('Error creating event:', error.response?.data || error.message);
            alert('Failed to create event. Please try again.');
        }
    };

    return (
        <form className="create-event-form" onSubmit={handleSubmit}>
            <h2>Create Event</h2>
            <input
                type="text"
                name="name"
                placeholder="Event Name"
                value={eventData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={eventData.location}
                onChange={handleChange}
                required
            />
            <textarea
                name="details"
                placeholder="Event Details"
                value={eventData.details}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={eventData.description}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={eventData.time}
                onChange={handleChange}
                required
            />
            <button type="submit">Create Event</button>
            {inviteLink && (
                <div className="invite-link">
                    <p>Share this link with invitees:</p>
                    <input type="text" value={inviteLink} readOnly />
                </div>
            )}
        </form>
    );
};

export default CreateEvent;
