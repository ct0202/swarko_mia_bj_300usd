import express from 'express';
import { registerController, loginController, deleteController, getAllAuthInstancesController } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getAllAuthInstancesController);
router.post('/register', registerController);
router.post('/login', loginController);
router.delete('/delete/:id', deleteController);

export default router;
