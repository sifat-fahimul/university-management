import express from 'express';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.createManagementDepartment
);

router.get(
  '/:id',
  ManagementDepartmentController.getSingleManagementDepartment
);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema
  ),
  ManagementDepartmentController.updateManagementDepartment
);
router.get('/', ManagementDepartmentController.getAllManagementDepartments);
// router.delete(
//   '/:id',
//   ManagementDepartmentController.deleteManagementDepartment
// );

export const ManagementDepartmentRouter = router;
