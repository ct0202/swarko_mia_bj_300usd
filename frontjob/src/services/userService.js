export const getUserById = (axios, id) =>
  axios.get(`/users/${id}`).then(res => res.data);

export const updateUser = (axios, id, userData) =>
  axios.put(`/users/${id}`, userData).then(res => res.data);
