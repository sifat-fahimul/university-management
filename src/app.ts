import express, { Application } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRouter } from './app/modules/user/user.route';
// import ApiError from './errors/ApiError';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/users/', UserRouter);

// global error handler
app.use(globalErrorHandler);

// // testing
// app.get('/', async (req: Request, res: Response) => {
//   // throw new ApiError(400, 'ohh hooo error');
//   Promise.reject(new Error('Unhandled request error'));
// });

export default app;
