import axios from 'axios';

const API_URL = 'http://localhost:8080/api/events';

// Fetch all events
export const getAllEvents = async () => {
    return await axios.get(API_URL);
};

// Fetch event by ID
export const getEventById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// Create a new event
export const createEvent = async (event) => {
    return await axios.post(API_URL, event);
};

// Update an existing event
export const updateEvent = async (id, event) => {
    return await axios.put(`${API_URL}/${id}`, event);
};

// Delete an event
export const deleteEvent = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
