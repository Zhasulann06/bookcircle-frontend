import api from "./axios";

export const fetchProgress = async (userId) => {
  const res = await api.get(`/progress/${userId}`);
  return res.data;
};

export const updateProgress = async (userId, data) => {
  const res = await api.put(`/progress/${userId}`, data);
  return res.data;
};

export const createProgress = async (data) => {
  const res = await api.post(`/progress`, data);
  return res.data;
};
