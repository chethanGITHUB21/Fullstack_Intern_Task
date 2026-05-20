import api from "../api/axios";

export async function fetchFavorites() {
  const response = await api.get("/favorites");
  return response.data.data;
}

export async function addFavorite(templateId) {
  const response = await api.post(`/favorites/${templateId}`);
  return response.data.data;
}

export async function removeFavorite(templateId) {
  const response = await api.delete(`/favorites/${templateId}`);
  return response.data.data;
}
