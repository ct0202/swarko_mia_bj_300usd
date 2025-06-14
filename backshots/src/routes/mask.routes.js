import { Router } from 'express';
import {
  listPublishedMasks,
  getMaskDetails,
} from '../controllers/mask.controller.js';

const router = Router();

router.get('/', listPublishedMasks);
router.get('/:id', getMaskDetails);

export default router;
