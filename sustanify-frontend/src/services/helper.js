import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8081';

export const myAxios = axios.create({
   baseURL: API_BASE_URL  // Ensure the correct casing (baseURL)
});
