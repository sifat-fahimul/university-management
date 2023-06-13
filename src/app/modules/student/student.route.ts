import express from 'express';
import { StudentController } from './student.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { StudentValidation } from './student.validation';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudentZodSchema),
  StudentController.updateStudent
);
// router.delete('/:id', StudentController.deleteStudent);

router.get('/', StudentController.getAllStudent);

export const StudentRouter = router;
