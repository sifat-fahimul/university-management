import { RequestHandler } from 'express';
import { AcademicSemestersService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...payload } = req.body;

    const result = await AcademicSemestersService.createSemester(payload);
    res.status(200).json({
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createAcademicSemester,
};
