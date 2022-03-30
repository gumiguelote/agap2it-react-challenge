import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ADDRESS,
  timeout: 4000,
});

export default api;
