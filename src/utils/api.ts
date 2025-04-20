import axios from "axios";

const api = axios.create({
  baseURL: "https://api.jotform.com",
  params: {
    apiKey: "524b47cd6ebbd321dca4589c7f59e058",
  },
});

export default api;
