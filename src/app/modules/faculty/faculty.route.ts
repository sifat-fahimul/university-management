import express from 'express';
import { FacultyController } from './faculty.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { FacultyValidation } from './faculty.validation';

const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty
);

router.get('/', FacultyController.getAllFaculty);
// router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRouter = router;
