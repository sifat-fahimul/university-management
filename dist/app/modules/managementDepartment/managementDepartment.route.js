"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const managementDepartment_validation_1 = require("./managementDepartment.validation");
const validateRequest_1 = require("../../middlewares/validateRequest");
const managementDepartment_controller_1 = require("./managementDepartment.controller");
const router = express_1.default.Router();
router.post('/create-management', (0, validateRequest_1.validateRequest)(managementDepartment_validation_1.ManagementDepartmentValidation.createManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmentController.createManagementDepartment);
router.get('/:id', managementDepartment_controller_1.ManagementDepartmentController.getSingleManagementDepartment);
router.patch('/:id', (0, validateRequest_1.validateRequest)(managementDepartment_validation_1.ManagementDepartmentValidation.updateManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmentController.updateManagementDepartment);
router.get('/', managementDepartment_controller_1.ManagementDepartmentController.getAllManagementDepartments);
// router.delete(
//   '/:id',
//   ManagementDepartmentController.deleteManagementDepartment
// );
exports.ManagementDepartmentRouter = router;
