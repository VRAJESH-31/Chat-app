import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://chat-app-yqx9.onrender.com', // Adjust the base URL as needed
    withCredentials: true, // Include credentials for cross-origin requests
});

export default axiosInstance;