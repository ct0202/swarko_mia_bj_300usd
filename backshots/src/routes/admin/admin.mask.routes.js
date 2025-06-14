import { Router } from 'express';
import multer from 'multer';
import {
  listMasks,
  create,
  get,
  update,
  remove,
  uploadImage,
  addStep,
} from '../../controllers/admin/admin.mask.controller.js';

const router = Router();
const upload = multer({ dest: 'uploads/' }); // You can enhance this later

router.get('/', listMasks);
router.post('/', create);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

router.post('/:id/upload', upload.single('file'), uploadImage);
router.post('/:id/steps', addStep);

export default router;
