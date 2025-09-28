import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/api", // adjust to your Laravel Sail endpoint
  headers: {},
});

// Interceptors for adding tokens / logging
api.interceptors.request.use(
  (config) => {
    // Example: add auth token if available
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    console.error(error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
