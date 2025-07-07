import axios from "axios";

const API_URL = "/api/auth";

export const authService = {
  register: (userData) => axios.post(`${API_URL}/register`, userData).then(res => res.data),
  login: (credentials) => axios.post(`${API_URL}/login`, credentials).then(res => res.data),
};
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};