import { Product } from '../models/product.model.js';

export const fetchPublishedProducts = async (query) => {
  const filter = { isPublished: true };

  if (query.category) {
    filter.category = query.category;
  }

  return await Product.find(filter)
    .populate('relatedMasks', 'name') // Optional
    .sort({ createdAt: -1 });
};

export const fetchPublishedProductById = async (id) => {
  return await Product.findOne({ _id: id, isPublished: true }).populate('relatedMasks', 'name');
};
