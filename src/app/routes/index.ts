import express from 'express';
import { UserRouter } from '../modules/user/user.route';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { StudentRouter } from '../modules/student/student.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRouter,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRouter,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRouter,
  },
  {
    path: '/students',
    route: StudentRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
