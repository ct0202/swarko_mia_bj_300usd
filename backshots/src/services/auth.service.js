import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Auth } from '../models/auth.model.js';
import { User } from '../models/user.model.js';
import env from '../config/env.js';

export const AuthService = {
  async register({ telegramId, password, name, phone, email }) {
    const existing = await Auth.findOne({ telegramId });
    if (existing) throw new Error('Telegram ID already registered');

    const passwordHash = password ? await bcrypt.hash(password, 10) : undefined;

    // Create User first
    const user = new User({ name, phone, email });
    await user.save();

    // Then Auth with reference
    const auth = new Auth({
      telegramId,
      passwordHash,
      user: user._id,
    });
    await auth.save();

    return { auth, user };
  },



  async login({ telegramId, password }) {
    const auth = await Auth.findOne({ telegramId });
    if (!auth) throw new Error('Invalid credentials');

    if (password && !(await bcrypt.compare(password, auth.passwordHash))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { telegramId: auth.telegramId, role: auth.role },
      env.jwtSecret,
      { expiresIn: '30d' }
    );

    return { token };
  }
};
