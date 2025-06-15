export const getAdminProducts = (axios) => axios.get('/admin/products');
export const createProduct = (axios, data) => axios.post('/admin/products', data);
export const getProductById = (axios, id) => axios.get(`/admin/products/${id}`);
export const updateProduct = (axios, id, data) => axios.put(`/admin/products/${id}`, data);
export const deleteProduct = (axios, id) => axios.delete(`/admin/products/${id}`);
