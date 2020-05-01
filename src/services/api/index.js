import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
});

API.interceptors.request.use((requestConfig) => {
  if (requestConfig.url !== "/login" && requestConfig.url !== "/signup") {
    const token = localStorage.getItem("token");
    requestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return requestConfig;
});

export default API;
