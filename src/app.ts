import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1', routers);
// app.use('/api/v1/users/', UserRouter);
// app.use('/api/v1/academic-semester/', AcademicSemesterRouter);

// global error handler
app.use(globalErrorHandler);

// testing
// app.get('/', (req, res, next) => {
//   throw new ApiError(400, 'ohh hooo error');
//   // console.log(x);
// });

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found!',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api route not found!',
      },
    ],
  });
  next();
});

export default app;
