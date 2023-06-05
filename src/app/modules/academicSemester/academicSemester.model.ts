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

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ACADEMIC_SEMESTER_TITLES,
    },
    year: {
      type: Number,
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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
