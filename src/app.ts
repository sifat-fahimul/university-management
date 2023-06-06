import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';
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

export default app;
