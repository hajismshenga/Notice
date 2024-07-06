import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        fontFamily: 'Arial',
        fontSize: '16px',
        primaryColor: '#007bff',
        backgroundColor: '#f4f4f9',
        textColor: '#333',
        backgroundImage: ''
    });

    const updateTheme = (newTheme) => {
        setTheme((prevTheme) => ({
            ...prevTheme,
            ...newTheme
        }));
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
