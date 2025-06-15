export const getAdminUsers = (axios) => axios.get('/admin/users');
export const blockUser = (axios, id) => axios.post(`/admin/users/${id}/block`);
export const deleteUser = (axios, id) => axios.delete(`/admin/users/${id}`);
export const exportUsersCSV = (axios, data) => axios.post('/admin/users/export', data, {
  responseType: 'blob',
});