export const listPublishedMasks = (axios) =>
  axios.get("/masks").then(res => res.data);

export const getMaskDetails = (axios, id) =>
  axios.get(`/masks/${id}`).then(res => res.data);
