import api from "./axios";

export const fetchRooms = async (params) => {
  const res = await api.get("/rooms", { params });
  return res.data;
};

export const fetchRoom = async (id) => {
  const res = await api.get(`/rooms/${id}`);
  return res.data;
};

export const createRoom = async (data) => {
  const res = await api.post("/rooms", data);
  return res.data;
};

export const updateRoom = async (id, data) => {
  const res = await api.put(`/rooms/${id}`, data);
  return res.data;
};

export const deleteRoom = async (id) => {
  const res = await api.delete(`/rooms/${id}`);
  return res.data;
};
