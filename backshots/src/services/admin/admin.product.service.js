// services/admin/admin.product.service.js
import { Product } from '../../models/product.model.js';

export const createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

export const getAllProducts = async (filter = {}) => {
  return await Product.find(filter).populate('relatedMasks');
};

export const getProductById = async (id) => {
  return await Product.findById(id).populate('relatedMasks');
};

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
