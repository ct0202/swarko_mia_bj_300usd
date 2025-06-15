export const login = (axios, credentials) =>
  axios.post("/auth/login", credentials).then(res => res.data);

export const register = (axios, payload) =>
  axios.post("/auth/register", payload).then(res => res.data);
