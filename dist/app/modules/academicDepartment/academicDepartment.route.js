'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicDepartmentRouter = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = require('../../middlewares/validateRequest');
const academicDepartment_validation_1 = require('./academicDepartment.validation');
const academicDepartment_contoller_1 = require('./academicDepartment.contoller');
const router = express_1.default.Router();
router.post(
  '/create-department',
  (0, validateRequest_1.validateRequest)(
    academicDepartment_validation_1.AcademicDepartmentValidation
      .createAcademicDepartmentZodSchema
  ),
  academicDepartment_contoller_1.AcademicDepartmentController.createDepartment
);
router.get(
  '/:id',
  academicDepartment_contoller_1.AcademicDepartmentController
    .getSingleDepartment
);
router.patch(
  '/:id',
  (0, validateRequest_1.validateRequest)(
    academicDepartment_validation_1.AcademicDepartmentValidation
      .updateAcademicDepartmentZodSchema
  ),
  academicDepartment_contoller_1.AcademicDepartmentController.updateDepartment
);
router.delete(
  '/:id',
  academicDepartment_contoller_1.AcademicDepartmentController.deleteDepartment
);
router.get(
  '/',
  academicDepartment_contoller_1.AcademicDepartmentController.getAllDepartment
);
exports.AcademicDepartmentRouter = router;
