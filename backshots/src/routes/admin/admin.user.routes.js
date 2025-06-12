import { Router } from 'express';
import {
  listUsers,
  exportUsersCSV,
  blockUser,
  deleteUser,
} from '../../controllers/admin/admin.user.controller.js';

const router = Router();

router.get('/', listUsers);
router.post('/export', exportUsersCSV);
router.post('/:id/block', blockUser);
router.delete('/:id', deleteUser);

export default router;
