import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateEvent from './components/CreateEvent';
import Responses from './components/Responses';
import Settings from './components/Settings';
import Navbar from './components/Navbar';
import EventDetail from './components/EventDetail'; // Import the EventDetail component
import { ThemeProvider } from './ThemeContext';
import './styles.css';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <div>
                    <Navbar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/create-event" element={<CreateEvent />} />
                            <Route path="/responses" element={<Responses />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/event/:id" element={<EventDetail />} /> {/* Route for EventDetail */}
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
