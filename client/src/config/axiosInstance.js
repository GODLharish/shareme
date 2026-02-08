import axios from "axios";

// Use environment variable or default to production URL
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:6600/api/";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;

export default axiosInstance;