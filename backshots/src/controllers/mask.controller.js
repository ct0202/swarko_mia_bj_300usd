const maskService = require('../services/mask.service');

exports.getMasks = async (req, res) => {
  const masks = await maskService.listMasks(req.query);
  res.json(masks);
};

exports.createMask = async (req, res) => {
  const mask = await maskService.createMask(req.body);
  res.status(201).json(mask);
};
