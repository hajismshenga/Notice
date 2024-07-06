import React, { useState } from 'react';
import axios from 'axios';
import './CreateEvent.css'; // Import the CSS file

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        eventName: '',
        description: '',
        date: '',
        time: '',
        location: '',
        inviteeEmails: []
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleAddInvitee = () => {
        setEventData({
            ...eventData,
            inviteeEmails: [...eventData.inviteeEmails, '']
        });
    };

    const handleInviteeChange = (index, e) => {
        const newInviteeEmails = eventData.inviteeEmails.map((email, i) => {
            if (i === index) {
                return e.target.value;
            }
            return email;
        });
        setEventData({ ...eventData, inviteeEmails: newInviteeEmails });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/events', eventData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log('Event created:', response.data);
            // Redirect to dashboard or clear the form
            setEventData({
                eventName: '',
                description: '',
                date: '',
                time: '',
                location: '',
                inviteeEmails: []
            });
        } catch (error) {
            console.error('Error creating event:', error.response?.data || error.message);
        }
    };

    return (
        <form className="create-event-form" onSubmit={handleSubmit}>
            <h2>Create Event</h2>
            <input
                type="text"
                name="eventName"
                placeholder="Event Name"
                value={eventData.eventName}
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
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={eventData.location}
                onChange={handleChange}
                required
            />
            {eventData.inviteeEmails.map((email, index) => (
                <input
                    key={index}
                    type="email"
                    placeholder="Invitee Email"
                    value={email}
                    onChange={(e) => handleInviteeChange(index, e)}
                    required
                />
            ))}
            <button type="button" className="add-invitee" onClick={handleAddInvitee}>
                Add Invitee
            </button>
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEvent;
