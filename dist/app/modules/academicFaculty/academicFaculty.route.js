"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const validateRequest_1 = require("../../middlewares/validateRequest");
const router = express_1.default.Router();
router.post('/create-faculty', (0, validateRequest_1.validateRequest)(academicFaculty_validation_1.AcademicFacultyValidation.createFacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.createAcademicFaculty);
router.get('/:id', academicFaculty_controller_1.AcademicFacultyController.getSingleFaculties);
router.patch('/:id', (0, validateRequest_1.validateRequest)(academicFaculty_validation_1.AcademicFacultyValidation.updateFacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.updateFaculty);
router.delete('/:id', academicFaculty_controller_1.AcademicFacultyController.deleteFaculty);
router.get('/', academicFaculty_controller_1.AcademicFacultyController.getAllFaculties);
exports.AcademicFacultyRouter = router;
