// controllers/admin/admin.product.controller.js
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../../services/admin/admin.product.service.js';

export const listProducts = async (req, res) => {
  const products = await getAllProducts(req.query);
  res.json(products);
};

export const createNewProduct = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json(product);
};

export const getOneProduct = async (req, res) => {
  const product = await getProductById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const editProduct = async (req, res) => {
  const updated = await updateProduct(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const removeProduct = async (req, res) => {
  const deleted = await deleteProduct(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};
