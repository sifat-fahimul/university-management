'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.academicSemesterFilterableFields =
  exports.academicSemesterSearchableFields =
  exports.ACADEMIC_SEMESTER_TITLE_CODE_MAPPER =
  exports.ACADEMIC_SEMESTER_CODES =
  exports.ACADEMIC_SEMESTER_TITLES =
  exports.ACADEMIC_SEMESTER_MONTHS =
    void 0;
exports.ACADEMIC_SEMESTER_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
exports.ACADEMIC_SEMESTER_TITLES = ['Autumn', 'Summer', 'Fall'];
exports.ACADEMIC_SEMESTER_CODES = ['01', '02', '03'];
exports.ACADEMIC_SEMESTER_TITLE_CODE_MAPPER = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
exports.academicSemesterSearchableFields = ['title', 'code', 'year'];
exports.academicSemesterFilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];
