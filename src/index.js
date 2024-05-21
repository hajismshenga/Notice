// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Ensure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
