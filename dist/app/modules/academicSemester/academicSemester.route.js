"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = require("../../middlewares/validateRequest");
const academicSemester_validation_1 = require("./academicSemester.validation");
const academicSemester_controller_1 = require("./academicSemester.controller");
const router = express_1.default.Router();
router.post('/create-semester', (0, validateRequest_1.validateRequest)(academicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterZodSchema), academicSemester_controller_1.AcademicSemesterController.createAcademicSemester);
router.get('/:id', academicSemester_controller_1.AcademicSemesterController.getSingleSemesters);
router.patch('/:id', (0, validateRequest_1.validateRequest)(academicSemester_validation_1.AcademicSemesterValidation.updateAcademicSemesterZodSchema), academicSemester_controller_1.AcademicSemesterController.updateSemester);
router.delete('/:id', academicSemester_controller_1.AcademicSemesterController.deleteSemester);
router.get('/', academicSemester_controller_1.AcademicSemesterController.getAllSemesters);
exports.AcademicSemesterRouter = router;
