import axios from '../axiosConfig';
import React, { useState } from 'react';
import './CreateEvent.css'; // Import the CSS file

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        name: '',
        location: '',
        details: '',
        description: '',
        date: '',
        time: ''
    });

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
            // Redirect to dashboard or clear the form
            setEventData({
                name: '',
                location: '',
                details: '',
                description: '',
                date: '',
                time: ''
            });
            alert('Event created successfully!');
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
        </form>
    );
};

export default CreateEvent;
