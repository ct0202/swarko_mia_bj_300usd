import jwt from 'jsonwebtoken';
import env from '../config/env.js';

export const isAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, env.jwtSecret);
    if (decoded.role !== 'admin') throw new Error();
    req.admin = decoded;
    next();
  } catch {
    res.status(403).json({ message: 'Forbidden' });
  }
};
