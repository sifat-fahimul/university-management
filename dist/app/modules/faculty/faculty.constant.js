'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.facultyFilterableFields =
  exports.facultySearchableFields =
  exports.DESIGNATION =
  exports.BLOOD_GROUP =
  exports.GENDER =
    void 0;
exports.GENDER = ['male', 'female'];
exports.BLOOD_GROUP = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
exports.DESIGNATION = ['Professor', 'Lecturer'];
exports.facultySearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];
exports.facultyFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];
