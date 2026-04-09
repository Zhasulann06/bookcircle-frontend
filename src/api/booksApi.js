import api from "./axios";

export const fetchBooks = async (params) => {
  const res = await api.get("/books", { params });
  return res.data;
};

export const fetchBook = async (id) => {
  const res = await api.get(`/books/${id}`);
  return res.data;
};

export const createBook = async (data) => {
  const res = await api.post("/books", data);
  return res.data;
};

export const updateBook = async (id, data) => {
  const res = await api.put(`/books/${id}`, data);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await api.delete(`/books/${id}`);
  return res.data;
};
