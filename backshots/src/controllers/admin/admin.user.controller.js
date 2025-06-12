import {
  getAllUsers,
  exportToCSV,
  blockUserById,
  deleteUserById,
} from '../../services/admin/admin.user.service.js';

export const listUsers = async (req, res) => {
  const users = await getAllUsers(req.query);
  res.json(users);
};

export const exportUsersCSV = async (req, res) => {
  const csv = await exportToCSV(req.body.filters);
  res.setHeader('Content-Disposition', 'attachment; filename=users.csv');
  res.set('Content-Type', 'text/csv');
  res.send(csv);
};

export const blockUser = async (req, res) => {
  await blockUserById(req.params.id);
  res.status(200).json({ message: 'User blocked' });
};

export const deleteUser = async (req, res) => {
  await deleteUserById(req.params.id);
  res.status(200).json({ message: 'User deleted' });
};
