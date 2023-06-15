'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const config_1 = __importDefault(require('../../config'));
const handleValidationError_1 = __importDefault(
  require('../../errors/handleValidationError')
);
const ApiError_1 = __importDefault(require('../../errors/ApiError'));
const logger_1 = require('../../shared/logger');
const zod_1 = require('zod');
const handleZodError_1 = __importDefault(
  require('../../errors/handleZodError')
);
const handleCastError_1 = __importDefault(
  require('../../errors/handleCastError')
);
const globalErrorHandler = (err, req, res, next) => {
  config_1.default.env === 'development'
    ? console.log('globalErrorHandler', err)
    : logger_1.console.log('globalErrorHandler', err);
  let statusCode = 500;
  let message = 'something went wrong';
  let errorMessage = [];
  if (
    (err === null || err === void 0 ? void 0 : err.name) === 'ValidationError'
  ) {
    const simplifiedError = (0, handleValidationError_1.default)(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (err instanceof zod_1.ZodError) {
    const simplifiedError = (0, handleZodError_1.default)(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (
    (err === null || err === void 0 ? void 0 : err.name) === 'CastError'
  ) {
    const simplifiedError = (0, handleCastError_1.default)(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessage = simplifiedError.errorMessage;
  } else if (err instanceof ApiError_1.default) {
    statusCode = err.statusCode;
    message = err.message;
    errorMessage = (err === null || err === void 0 ? void 0 : err.message)
      ? [{ path: '', message: err.message }]
      : [];
  } else if (err instanceof Error) {
    message = err.message;
    errorMessage = (err === null || err === void 0 ? void 0 : err.message)
      ? [
          {
            path: '',
            message: err === null || err === void 0 ? void 0 : err.message,
          },
        ]
      : [];
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack:
      config_1.default.env !== 'production'
        ? err === null || err === void 0
          ? void 0
          : err.stack
        : undefined,
  });
};
exports.default = globalErrorHandler;
