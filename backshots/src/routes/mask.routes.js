import router from 'express';
import controller from '../controllers/mask.controller';
import auth from '../middleware/auth.middleware';

router.get('/', controller.getMasks);
router.post('/', auth.adminOnly, controller.createMask);

module.exports = router;
