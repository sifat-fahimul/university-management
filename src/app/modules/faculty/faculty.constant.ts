export const GENDER = ['male', 'female'];
export const BLOOD_GROUP = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
export const DESIGNATION = ['Professor', 'Lecturer'];

export const facultySearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];

export const facultyFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];
