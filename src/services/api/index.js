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

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default API;
