export const getAdminMasks = (axios) => axios.get('/admin/masks');
export const createMask = (axios, data) => axios.post('/admin/masks', data);
export const getMaskById = (axios, id) => axios.get(`/admin/masks/${id}`);
export const updateMask = (axios, id, data) => axios.put(`/admin/masks/${id}`, data);
export const deleteMask = (axios, id) => axios.delete(`/admin/masks/${id}`);
export const uploadMaskImage = (axios, id, formData) => axios.post(`/admin/masks/${id}/upload`, formData);
export const addStepToMask = (axios, id, step) => axios.post(`/admin/masks/${id}/steps`, step);
