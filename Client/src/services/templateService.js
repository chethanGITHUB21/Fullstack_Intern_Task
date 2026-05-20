import api from "../api/axios";

export async function fetchTemplates() {
  const response = await api.get("/templates");
  return response.data.data;
}
