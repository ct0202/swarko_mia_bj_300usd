import { Router } from 'express';
import { isAdmin } from '../middleware/isAdmin.middleware.js';

import adminAuthRoutes from './admin/admin.auth.routes.js';
import adminUserRoutes from './admin/admin.user.routes.js';
// import adminMailingRoutes from './admin/admin.mailing.routes.js';
// import adminAnalyticsRoutes from './admin/admin.analytics.routes.js';
// import adminContentRoutes from './admin/admin.content.routes.js';
// import adminMaskRoutes from './admin/admin.mask.routes.js';
// import adminProductRoutes from './admin/admin.product.routes.js';
// import adminVideoRoutes from './admin/admin.video.routes.js';

const router = Router();

router.use('/auth', adminAuthRoutes);
router.use('/users', isAdmin, adminUserRoutes);

// router.use('/mailings', adminMailingRoutes);
// router.use('/analytics', adminAnalyticsRoutes);
// router.use('/content', adminContentRoutes);
// router.use('/masks', adminMaskRoutes);
// router.use('/products', adminProductRoutes);
// router.use('/videos', adminVideoRoutes);

export default router;
