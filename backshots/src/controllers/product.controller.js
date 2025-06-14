import {
  fetchPublishedProducts,
  fetchPublishedProductById
} from '../services/product.service.js';

export const listPublishedProducts = async (req, res) => {
  const products = await fetchPublishedProducts(req.query);
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await fetchPublishedProductById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};
