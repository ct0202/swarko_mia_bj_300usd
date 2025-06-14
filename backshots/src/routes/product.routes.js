import { Router } from 'express';
import {
  listPublishedProducts,
  getProductById
} from '../controllers/product.controller.js';

const router = Router();

// GET /api/products - list only published products
router.get('/', listPublishedProducts);

// GET /api/products/:id - get one published product
router.get('/:id', getProductById);

export default router;
