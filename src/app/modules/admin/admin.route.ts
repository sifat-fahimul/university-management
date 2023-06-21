import express from 'express';
import { AdminValidation } from './admin.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';

const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdminZodSchema),
  AdminController.updateAdmin
);
router.delete('/:id', AdminController.deleteAdmin);

router.get('/', AdminController.getAllAdmin);

export const AdminRouter = router;
