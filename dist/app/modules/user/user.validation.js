"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const student_constant_1 = require("../student/student.constant");
const faculty_constant_1 = require("../faculty/faculty.constant");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        student: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is required',
                }),
                middleName: zod_1.z.string().optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last name is required',
                }),
            }),
            gender: zod_1.z.enum([...student_constant_1.GENDER]),
            dateOfBirth: zod_1.z.string({
                required_error: 'Date of birth is required',
            }),
            email: zod_1.z.string({ required_error: 'Email is required' }).email(),
            contactNo: zod_1.z.string({ required_error: 'Contact No is required' }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emergency Contact No is required',
            }),
            bloodGroup: zod_1.z.enum([...student_constant_1.BLOOD_GROUP]).optional(),
            presentAddress: zod_1.z.string({
                required_error: 'Present address is required',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Permanent address is required',
            }),
            academicSemester: zod_1.z.string({
                required_error: 'Academic Semester is required',
            }),
            academicDepartment: zod_1.z.string({
                required_error: 'Academic department is required',
            }),
            academicFaculty: zod_1.z.string({
                required_error: 'Academic faculty is required',
            }),
            guardian: zod_1.z.object({
                fatherName: zod_1.z.string({ required_error: 'Father name is required' }),
                fatherOccupation: zod_1.z.string({
                    required_error: 'Father occupation is required',
                }),
                fatherContactNo: zod_1.z.string({
                    required_error: 'Father contact number is required',
                }),
                motherName: zod_1.z.string({
                    required_error: 'Mother name is required',
                }),
                motherOccupation: zod_1.z.string({
                    required_error: 'Mother occupation is required',
                }),
                motherContactNo: zod_1.z.string({
                    required_error: 'Mother contact number is required',
                }),
                address: zod_1.z.string({
                    required_error: 'Guardian address is required',
                }),
            }),
            localGuardian: zod_1.z.object({
                name: zod_1.z.string({
                    required_error: 'Local guardian name is required',
                }),
                occupation: zod_1.z.string({
                    required_error: 'Local guardian occupation is required',
                }),
                contactNo: zod_1.z.string({
                    required_error: 'Local guardian contact number is required',
                }),
                address: zod_1.z.string({
                    required_error: 'Local guardian address is required',
                }),
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
const createFacultyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        faculty: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is required',
                }),
                middleName: zod_1.z.string().optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last name is required',
                }),
            }),
            gender: zod_1.z.enum([...student_constant_1.GENDER]),
            dateOfBirth: zod_1.z.string({
                required_error: 'Date of birth is required',
            }),
            email: zod_1.z.string({ required_error: 'Email is required' }).email(),
            contactNo: zod_1.z.string({ required_error: 'Contact No is required' }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emergency Contact No is required',
            }),
            presentAddress: zod_1.z.string({
                required_error: 'Present address is required',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Permanent address is required',
            }),
            bloodGroup: zod_1.z.enum([...student_constant_1.BLOOD_GROUP]).optional(),
            designation: zod_1.z.enum([...faculty_constant_1.DESIGNATION]),
            academicDepartment: zod_1.z.string({
                required_error: 'Academic department is required',
            }),
            academicFaculty: zod_1.z.string({
                required_error: 'Academic faculty is required',
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        admin: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is required',
                }),
                middleName: zod_1.z.string().optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last name is required',
                }),
            }),
            gender: zod_1.z.enum([...student_constant_1.GENDER]),
            dateOfBirth: zod_1.z.string({
                required_error: 'Date of birth is required',
            }),
            email: zod_1.z.string({ required_error: 'Email is required' }).email(),
            contactNo: zod_1.z.string({ required_error: 'Contact No is required' }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emergency Contact No is required',
            }),
            presentAddress: zod_1.z.string({
                required_error: 'Present address is required',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Permanent address is required',
            }),
            bloodGroup: zod_1.z.enum([...student_constant_1.BLOOD_GROUP]).optional(),
            designation: zod_1.z.string({
                required_error: 'Designation is required',
            }),
            managementDepartment: zod_1.z.string({
                required_error: 'Management department is required',
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    createFacultyZodSchema,
    createAdminZodSchema,
};
//   await createUserZodSchema.parseAsync(req);
