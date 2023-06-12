import { z } from 'zod';

const updateStudentZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      middleName: z.string().optional(),
      lastName: z.string().optional(),
    }),
  }),
});

export const StudentValidation = { updateStudentZodSchema };
