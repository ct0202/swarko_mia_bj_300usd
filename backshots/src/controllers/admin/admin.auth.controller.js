import { login, register } from '../../services/admin/admin.auth.service.js';

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};


export const adminRegister = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);
    const admin = await register(email, password);
    res.status(201).json({ message: 'Admin registered successfully', admin });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
