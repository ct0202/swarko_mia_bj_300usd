// src/services/user.service.js
import { User } from '../models/user.model.js';
import { deleteAuthByUserId } from './auth.service.js';

export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

export const getAllUsers = async () => {
  return await User.find().sort({ createdAt: -1 });
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

export const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

export const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (user) {
    await deleteAuthByUserId(user._id); // use service method
  }
  return user;
};
