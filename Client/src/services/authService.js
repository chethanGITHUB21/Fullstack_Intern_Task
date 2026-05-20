import api from "../api/axios";

export async function loginUser(payload) {
  const response = await api.post("/auth/login", payload);
  return response.data.data;
}

export async function registerUser(payload) {
  const response = await api.post("/auth/register", payload);
  return response.data.data;
}
