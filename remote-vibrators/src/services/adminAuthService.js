export const adminLogin = (axios, data) => axios.post('/admin/auth/login', data);
export const adminRegister = (axios, data) => axios.post('/admin/auth/register', data);