import { register, login, deleteAuthByUserId, getAllAuthInstances } from '../services/auth.service.js';

export const registerController = async (req, res) => {
  try {
    const auth = await register(req.body);
    res.status(201).json({ message: 'User registered', telegramId: auth.telegramId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { token } = await login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const deleteController = async (req, res) => {
  try {
    await deleteAuthByUserId(req.params.id);
    res.status(204).json({ message: "Successfully deleted"});
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};


export const getAllAuthInstancesController = async (req, res) => {
  try {
    const instances = await getAllAuthInstances();
    res.status(200).json({ instances });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

