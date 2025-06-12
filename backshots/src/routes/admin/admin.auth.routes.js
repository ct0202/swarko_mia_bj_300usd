import { Router } from 'express';
import { adminLogin, adminRegister } from '../../controllers/admin/admin.auth.controller.js';

const router = Router();

router.post('/login', adminLogin);
router.post('/register', adminRegister);

export default router;
