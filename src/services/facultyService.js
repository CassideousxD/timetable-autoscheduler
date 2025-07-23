import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get faculty timetable for viewer
const getFacultyTimetableViewer = async (name) => {
  const response = await fetch(`/api/faculties/faculty-timetable-viewer?name=${encodeURIComponent(name)}`);
  if (!response.ok) throw new Error('Failed to fetch faculty timetable');
  return await response.json();
};

export const facultyService = {
  register: async (data) => {
    const res = await axios.post(`${API_URL}/faculties/register`, data);
    return res.data;
  },
  getUGCourses: async () => {
    const res = await axios.get(`${API_URL}/faculties/ug-courses`);
    return res.data;
  },
  storeFacultyName: async (name) => {
    const res = await axios.post(`${API_URL}/faculties/store-name`, { name });
    return res.data;
  },
  addFacultyManual: async (data) => {
    const res = await axios.post(`${API_URL}/faculties/manual-add`, data);
    return res.data;
  },
  uploadFacultyExcel: async (faculties) => {
    const res = await axios.post(`${API_URL}/faculties/excel-upload`, { faculties });
    return res.data;
  },
  getFacultySummary: async () => {
    const res = await axios.get(`${API_URL}/faculties/summary`);
    return res.data;
  },
  uploadWorkloadExcel: async (workloads) => {
    const res = await axios.post(`${API_URL}/faculties/workload/excel`, { workloads });
    return res.data;
  },
  getAllFaculty: async () => {
    const res = await axios.get(`${API_URL}/faculties`);
    return res.data;
  },
  uploadFacultyAssignments: async (assignments) => {
    const res = await axios.post(`${API_URL}/hod/assignments`, { assignments });
    return res.data;
  },
  getAllAssignments: async () => {
    const res = await axios.get(`${API_URL}/faculties/assignments`);
    return res.data;
  },
  getBatchSpecificAssignments: async (courseCode) => {
    const res = await axios.get(`${API_URL}/hod/assignments/${courseCode}`);
    return res.data;
  },
  getFacultyCourseAssignments: async () => {
    const res = await axios.get(`${API_URL}/faculties/assignments/timetable`);
    return res.data;
  },
  getFacultyAssignmentsForSemester: async (semester, courseType) => {
    const res = await axios.get(`${API_URL}/faculties/assignments/semester/${semester}/${courseType}`);
    return res.data;
  },
  getFacultyAssignmentsForCourseBatch: async (params) => {
    const queryParams = new URLSearchParams(params);
    const res = await axios.get(`${API_URL}/faculties/assignments/course-batch?${queryParams}`);
    return res.data;
  },
  getFacultyCourseAssignmentsByFaculty: async (facultyName) => {
    const res = await axios.get(`${API_URL}/faculties/course-assignments/name?name=${encodeURIComponent(facultyName)}`);
    return res.data;
  },
  getAllFacultyCourseAssignments: async () => {
    const res = await axios.get(`${API_URL}/faculties/course-assignments/all`);
    return res.data;
  },
  getFacultyTimetableViewer,
  updateAssignment: async (id, data) => {
    const res = await axios.put(`${API_URL}/faculties/assignments/${id}`, data);
    return res.data;
  },
  deleteAssignment: async (id) => {
    const res = await axios.delete(`${API_URL}/faculties/assignments/${id}`);
    return res.data;
  },
}; 