// routes/admin/admin.product.router.js
import { Router } from 'express';
import {
  listProducts,
  createNewProduct,
  getOneProduct,
  editProduct,
  removeProduct
} from '../../controllers/admin/admin.product.controller.js';

const router = Router();

router.get('/', listProducts);
router.post('/', createNewProduct);
router.get('/:id', getOneProduct);
router.put('/:id', editProduct);
router.delete('/:id', removeProduct);

export default router;
