import {
  createMask,
  getAllMasks,
  getMaskById,
  updateMask,
  deleteMask,
  uploadImageToMask,
  addStepToMask,
} from '../../services/admin/admin.mask.service.js';

export const listMasks = async (req, res) => {
  const masks = await getAllMasks();
  res.json(masks);
};

export const create = async (req, res) => {
  const mask = await createMask(req.body);
  res.status(201).json(mask);
};

export const get = async (req, res) => {
  const mask = await getMaskById(req.params.id);
  if (!mask) return res.status(404).json({ message: 'Not found' });
  res.json(mask);
};

export const update = async (req, res) => {
  const mask = await updateMask(req.params.id, req.body);
  res.json(mask);
};

export const remove = async (req, res) => {
  await deleteMask(req.params.id);
  res.status(204).end();
};

export const uploadImage = async (req, res) => {
  const imageUrl = `/uploads/${req.file.filename}`;
  const mask = await uploadImageToMask(req.params.id, imageUrl);
  res.json(mask);
};

export const addStep = async (req, res) => {
  const step = req.body;
  const mask = await addStepToMask(req.params.id, step);
  res.json(mask);
};
