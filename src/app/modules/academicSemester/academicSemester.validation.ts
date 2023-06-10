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
    year: z.string({
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

const updateAcademicSemesterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...ACADEMIC_SEMESTER_TITLES] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z
        .string({
          required_error: 'Year is required',
        })
        .optional(),
      code: z
        .enum([...ACADEMIC_SEMESTER_CODES] as [string, ...string[]])
        .optional(),
      startMonth: z
        .enum([...ACADEMIC_SEMESTER_MONTHS] as [string, ...string[]], {
          required_error: 'Start month is required',
        })
        .optional(),
      endMonth: z
        .enum([...ACADEMIC_SEMESTER_MONTHS] as [string, ...string[]], {
          required_error: 'end month is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: 'Either both title and code should be provided or neither',
    }
  );

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
  updateAcademicSemesterZodSchema,
};
