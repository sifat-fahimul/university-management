import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ACADEMIC_SEMESTER_TITLECODEMAPPER } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (ACADEMIC_SEMESTER_TITLECODEMAPPER[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export const AcademicSemestersService = {
  createSemester,
};
