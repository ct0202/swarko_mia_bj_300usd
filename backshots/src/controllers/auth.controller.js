import { AuthService } from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const auth = await AuthService.register(req.body);
    res.status(201).json({ message: 'User registered', telegramId: auth.telegramId });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { token } = await AuthService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
