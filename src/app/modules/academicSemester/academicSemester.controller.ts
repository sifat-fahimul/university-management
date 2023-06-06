import { AcademicSemestersService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...payload } = req.body;
    const result = await AcademicSemestersService.createSemester(payload);

    next();

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createAcademicSemester,
};
