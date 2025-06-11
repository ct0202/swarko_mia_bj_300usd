const router = require('express').Router();
const controller = require('../controllers/mask.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', controller.getMasks);
router.post('/', auth.adminOnly, controller.createMask);

module.exports = router;
