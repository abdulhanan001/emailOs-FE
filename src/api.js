import axios from 'axios';

// Create Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://localhost:5000/api' // TODO::  move into .env
});

export default api;
