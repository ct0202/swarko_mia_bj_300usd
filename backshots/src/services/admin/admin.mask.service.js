import { Mask } from '../../models/mask.model.js';

export const createMask = async (data) => {
  return await Mask.create(data);
};

export const getAllMasks = async () => {
  return await Mask.find().sort({ createdAt: -1 });
};

export const getMaskById = async (id) => {
  return await Mask.findById(id);
};

export const updateMask = async (id, data) => {
  return await Mask.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMask = async (id) => {
  return await Mask.findByIdAndDelete(id);
};

export const uploadImageToMask = async (id, imageUrl) => {
  const mask = await Mask.findById(id);
  if (!mask) throw new Error('Mask not found');
  mask.images.push(imageUrl);
  return await mask.save();
};

export const addStepToMask = async (id, step) => {
  const mask = await Mask.findById(id);
  if (!mask) throw new Error('Mask not found');
  mask.steps.push(step);
  return await mask.save();
};
