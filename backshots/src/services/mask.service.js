import { Mask } from '../models/mask.model.js';

export const getAllPublishedMasks = async () => {
  return await Mask.find({ isPublished: true })
    .populate('recommendedProducts')
    .sort({ createdAt: -1 });
};

export const getPublishedMaskById = async (id) => {
  return await Mask.findOne({ _id: id, isPublished: true })
    .populate('recommendedProducts');
};
