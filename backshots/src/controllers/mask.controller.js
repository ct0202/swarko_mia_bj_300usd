import {
  getAllPublishedMasks,
  getPublishedMaskById,
} from '../services/mask.service.js';

export const listPublishedMasks = async (req, res) => {
  const masks = await getAllPublishedMasks();
  res.json(masks);
};

export const getMaskDetails = async (req, res) => {
  const mask = await getPublishedMaskById(req.params.id);
  if (!mask) return res.status(404).json({ message: 'Mask not found' });
  res.json(mask);
};
