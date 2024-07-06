import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext'; // Adjust this path based on your actual file structure
import './settings.css'; // Import the CSS file from components directory

const Settings = () => {
    const { theme, updateTheme } = useContext(ThemeContext);
    const [localTheme, setLocalTheme] = useState(theme);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalTheme((prevTheme) => ({ ...prevTheme, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setLocalTheme((prevTheme) => ({
                    ...prevTheme,
                    backgroundImage: `url(${reader.result})`
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTheme(localTheme);
    };

    return (
        <form className="settings-form" onSubmit={handleSubmit}>
            <h2>Settings</h2>
            <label>
                Font Family:
                <select
                    name="fontFamily"
                    value={localTheme.fontFamily}
                    onChange={handleChange}
                >
                    <option value="'Arial', sans-serif">Arial</option>
                    <option value="'Courier New', monospace">Courier New</option>
                    <option value="'Georgia', serif">Georgia</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="'Verdana', sans-serif">Verdana</option>
                </select>
            </label>
            <label>
                Font Size:
                <input
                    type="text"
                    name="fontSize"
                    value={localTheme.fontSize}
                    onChange={handleChange}
                />
            </label>
            <label>
                Primary Color:
                <input
                    type="color"
                    name="primaryColor"
                    value={localTheme.primaryColor}
                    onChange={handleChange}
                />
            </label>
            <label>
                Background Color:
                <input
                    type="color"
                    name="backgroundColor"
                    value={localTheme.backgroundColor}
                    onChange={handleChange}
                />
            </label>
            <label>
                Background Image:
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </label>
            <button type="submit">Apply</button>
        </form>
    );
};

export default Settings;
