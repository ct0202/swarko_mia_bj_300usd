import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import AdminUser from '../../models/admin.model.js'; // You’ll need to create this schema

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

export const login = async (email, password) => {
  const admin = await AdminUser.findOne({ email });
  if (!admin) throw new Error('Admin not found');

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { id: admin._id, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return token;
};

export const register = async (email, password) => {
  const existing = await AdminUser.findOne({ email });
  if (existing) throw new Error('Admin with this email already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new AdminUser({
    email,
    password: hashedPassword
  });

  await newAdmin.save();
  return { id: newAdmin._id, email: newAdmin.email };
};
