"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_validation_1 = require("./admin.validation");
const validateRequest_1 = require("../../middlewares/validateRequest");
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.get('/:id', admin_controller_1.AdminController.getSingleAdmin);
router.patch('/:id', (0, validateRequest_1.validateRequest)(admin_validation_1.AdminValidation.updateAdminZodSchema), admin_controller_1.AdminController.updateAdmin);
router.get('/', admin_controller_1.AdminController.getAllAdmin);
// router.delete('/:id', AdminController.deleteAdmin);
exports.AdminRouter = router;
