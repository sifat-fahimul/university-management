import { z } from 'zod';
import {
  ACADEMIC_SEMESTER_CODES,
  ACADEMIC_SEMESTER_MONTHS,
  ACADEMIC_SEMESTER_TITLES,
} from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...ACADEMIC_SEMESTER_TITLES] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum([...ACADEMIC_SEMESTER_CODES] as [string, ...string[]]),
    startMonth: z.enum([...ACADEMIC_SEMESTER_MONTHS] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...ACADEMIC_SEMESTER_MONTHS] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
});

export const AcademicSemesterValidation = { createAcademicSemesterZodSchema };
