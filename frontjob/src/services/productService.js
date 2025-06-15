export const listPublishedProducts = (axios) =>
  axios.get("/products").then(res => res.data);

export const getProductById = (axios, id) =>
  axios.get(`/products/${id}`).then(res => res.data);
