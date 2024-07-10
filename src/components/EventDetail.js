import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        name: '',
        location: '',
        details: '',
        description: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`/api/events/${id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Error fetching event:', error.response?.data || error.message);
            }
        };
        fetchEvent();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/events/delete/${id}`);
            alert('Event deleted successfully');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting event:', error.response?.data || error.message);
            alert('Failed to delete event. Please try again.');
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
        setEditData(event);
    };

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`/api/events/update/${id}`, editData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Event updated successfully');
            setIsEditing(false);
            setEvent(editData);
        } catch (error) {
            console.error('Error updating event:', error.response?.data || error.message);
            alert('Failed to update event. Please try again.');
        }
    };

    if (!event) return <div>Loading...</div>;

    return (
        <div>
            {isEditing ? (
                <div>
                    <h2>Edit Event</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={editData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={editData.location}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="details"
                        placeholder="Event Details"
                        value={editData.details}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={editData.description}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={editData.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="time"
                        name="time"
                        value={editData.time}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h2>{event.name}</h2>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Details:</strong> {event.details}</p>
                    <p><strong>Description:</strong> {event.description}</p>
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default EventDetail;
