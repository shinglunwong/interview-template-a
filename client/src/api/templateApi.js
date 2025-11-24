import apiClient from "./client";

export const fetchDefaultTemplate = async () => {
  const response = await apiClient.get("/templates/default");
  return response.data;
};

export const createTemplate = async (payload) => {
  const response = await apiClient.post("/templates", payload);
  return response.data;
};
