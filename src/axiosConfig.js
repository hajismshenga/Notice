import axios from 'axios';

// Create an axios instance with base URL
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/', // Update the URL if needed
    timeout: 10000,
});

export default axiosInstance;
