import api from "./axios";

export const fetchComments = async (bookId, params) => {
  const res = await api.get(`/books/${bookId}/comments`, { params });
  return res.data;
};

export const createComment = async (bookId, data) => {
  const res = await api.post(`/books/${bookId}/comments`, data);
  return res.data;
};

export const deleteComment = async (bookId, commentId) => {
  const res = await api.delete(`/books/${bookId}/comments/${commentId}`);
  return res.data;
};
