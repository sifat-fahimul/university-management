import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  ACADEMIC_SEMESTER_CODES,
  ACADEMIC_SEMESTER_MONTHS,
  ACADEMIC_SEMESTER_TITLES,
} from './academicSemester.constant';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ACADEMIC_SEMESTER_TITLES,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: ACADEMIC_SEMESTER_CODES,
    },
    startMonth: {
      type: String,
      required: true,
      enum: ACADEMIC_SEMESTER_MONTHS,
    },
    endMonth: {
      type: String,
      required: true,
      enum: ACADEMIC_SEMESTER_MONTHS,
    },
  },
  { timestamps: true }
);

// Handle same year and same semester issue

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic Semester is already exists!'
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
