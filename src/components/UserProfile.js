import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUser();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('/api/auth/update', { newPassword }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Profile updated!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
    );
};

export default UserProfile;
