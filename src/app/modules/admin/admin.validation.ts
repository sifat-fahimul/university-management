import { z } from 'zod';
import { BLOOD_GROUP, GENDER } from './admin.constant';

const updateAdminZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        middleName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),

    gender: z.enum([...GENDER] as [string, ...string[]]).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    bloodGroup: z.enum([...BLOOD_GROUP] as [string, ...string[]]).optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional(),
    designation: z.string().optional(),
    managementDepartment: z.string().optional(),

    profileImage: z.string().optional(),
  }),
});

export const AdminValidation = { updateAdminZodSchema };
