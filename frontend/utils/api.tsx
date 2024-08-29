// src/utils/api.js
import axios from "axios";

// Set base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

// Create an Axios instance
const api = axios.create({
    baseURL: API_BASE_URL + "/api",
});

export default api;
