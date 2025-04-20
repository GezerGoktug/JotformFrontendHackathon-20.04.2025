import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jotform.com",
  params: {
    apiKey: import.meta.env.VITE_REACT_API_KEY,
  },
});

export default api;
