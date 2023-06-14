import { z } from 'zod';
import { BLOOD_GROUP, GENDER } from '../student/student.constant';
import { DESIGNATION } from '../faculty/faculty.constant';

const createUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      gender: z.enum([...GENDER] as [string, ...string[]]),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'Contact No is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required',
      }),
      bloodGroup: z.enum([...BLOOD_GROUP] as [string, ...string[]]).optional(),
      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      academicSemester: z.string({
        required_error: 'Academic Semester is required',
      }),
      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),
      guardian: z.object({
        fatherName: z.string({ required_error: 'Father name is required' }),
        fatherOccupation: z.string({
          required_error: 'Father occupation is required',
        }),
        fatherContactNo: z.string({
          required_error: 'Father contact number is required',
        }),
        motherName: z.string({
          required_error: 'Mother name is required',
        }),
        motherOccupation: z.string({
          required_error: 'Mother occupation is required',
        }),
        motherContactNo: z.string({
          required_error: 'Mother contact number is required',
        }),
        address: z.string({
          required_error: 'Guardian address is required',
        }),
      }),
      localGuardian: z.object({
        name: z.string({
          required_error: 'Local guardian name is required',
        }),
        occupation: z.string({
          required_error: 'Local guardian occupation is required',
        }),
        contactNo: z.string({
          required_error: 'Local guardian contact number is required',
        }),
        address: z.string({
          required_error: 'Local guardian address is required',
        }),
      }),
      profileImage: z.string().optional(),
    }),
  }),
});

const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      gender: z.enum([...GENDER] as [string, ...string[]]),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'Contact No is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required',
      }),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      bloodGroup: z.enum([...BLOOD_GROUP] as [string, ...string[]]).optional(),
      designation: z.enum([...DESIGNATION] as [string, ...string[]]),
      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),

      profileImage: z.string().optional(),
    }),
  }),
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'Last name is required',
        }),
      }),
      gender: z.enum([...GENDER] as [string, ...string[]]),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required',
      }),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'Contact No is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required',
      }),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),
      bloodGroup: z.enum([...BLOOD_GROUP] as [string, ...string[]]).optional(),
      designation: z.string({
        required_error: 'Designation is required',
      }),
      managementDepartment: z.string({
        required_error: 'Management department is required',
      }),

      profileImage: z.string().optional(),
    }),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  createFacultyZodSchema,
  createAdminZodSchema,
};
//   await createUserZodSchema.parseAsync(req);
