import { User } from '../../models/user.model.js';
import { Parser } from 'json2csv';
import { deleteAuthByUserId } from '../auth.service.js';

export const getAllUsers = async (query) => {
  const filter = {};
  if (query.mask) filter.selectedMask = query.mask;
  if (query.email) filter.email = new RegExp(query.email, 'i');
  return await User.find(filter).select('-password');
};

export const exportToCSV = async (filters) => {
  const users = await getAllUsers(filters);
  const parser = new Parser({
    fields: ['_id', 'name', 'email', 'phone', 'selectedMask', 'createdAt'],
  });
  return parser.parse(users);
};

export const blockUserById = async (userId) => {
  return await User.findByIdAndUpdate(userId, { blocked: true });
};

export const deleteUserById = async (userId) => {
  const user = await User.findByIdAndDelete(id);
  if (user) {
    await deleteAuthByUserId(user._id); // use service method
  }
  return user;
};
