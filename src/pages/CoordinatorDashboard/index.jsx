import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/DashboardLayout';
import { timetableService } from '../../services/timetableService';
import { courseService } from '../../services/courseService';
import { facultyService } from '../../services/facultyService';
import * as XLSX from 'xlsx';

const ROOM_INFRA = {
  UG: {
    rooms: [
      ...Array.from({ length: 10 }, (_, i) => `101`.replace('101', `${101 + i}`)),
      ...Array.from({ length: 10 }, (_, i) => `201`.replace('201', `${201 + i}`)),
      ...Array.from({ length: 10 }, (_, i) => `301`.replace('301', `${301 + i}`)),
      ...Array.from({ length: 10 }, (_, i) => `401`.replace('401', `${401 + i}`)),
    ],
    labs: ['Ground Floor Lab', 'Second Floor Lab', 'Third Floor Lab'],
  },
  PG: {
    rooms: ['R1', 'R2'],
    labs: ['First Floor Lab (PG only)'],
    semRoomMap: {
      '1': ['R1'],
      '2': ['R1'],
      '3': ['R2'],
      '4': ['R2'],
    },
  },
};
const UG_BATCHES = ['N', 'P', 'Q'];

const SEMESTERS = ['1', '2', '3', '4', '5', '6', '7', '8'];

const UG_SEM_1_2_ROOMS = ['Class 73', 'Class 74', 'Class 75']; // Red Building
const UG_KP_ROOMS = [
  ...Array.from({ length: 10 }, (_, i) => `${101 + i}`),
  ...Array.from({ length: 10 }, (_, i) => `${201 + i}`),
  ...Array.from({ length: 10 }, (_, i) => `${301 + i}`),
  ...Array.from({ length: 10 }, (_, i) => `${401 + i}`),
];

const PG_SEMESTERS = ['1', '2', '3', '4'];

const RoomAllocationPanel = ({ user }) => {
  const [semesterType, setSemesterType] = useState('Odd');
  const [courseType, setCourseType] = useState('UG');
  const [semester, setSemester] = useState('1');
  const [batch, setBatch] = useState('N');
  const [room, setRoom] = useState('');
  const [allocations, setAllocations] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [hasDisabledStudents, setHasDisabledStudents] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  // Fetch allocations on mount and after changes
  useEffect(() => {
    fetchAllocations();
  }, []);

  const fetchAllocations = async () => {
    try {
      const data = await timetableService.getRoomAllocations();
      console.log('Fetched Room Allocations:', data); // Add this
      setAllocations(data);
    } catch (err) {
      console.error('Error fetching room allocations:', err);
      setError('Failed to fetch room allocations');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this allocation?')) return;
    try {
      await timetableService.deleteRoomAllocation(id);
      await fetchAllocations();
    } catch (err) {
      setError('Failed to delete allocation');
    }
  };

  const handleEdit = (allocation) => {
    setEditingId(allocation._id);
    setEditData({ ...allocation });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async () => {
    try {
      await timetableService.updateRoomAllocation(editData._id, editData);
      setEditingId(null);
      setEditData({});
      await fetchAllocations();
    } catch (err) {
      setError('Failed to update allocation');
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const getRoomOptions = () => {
    if (
      hasDisabledStudents &&
      courseType === 'UG' &&
      Number(semester) >= 3 &&
      Number(semester) <= 8
    ) {
      return Array.from({ length: 10 }, (_, i) => `${101 + i}`);
    }
    if (courseType === 'UG') {
      if (semester === '1' || semester === '2') {
        return UG_SEM_1_2_ROOMS;
      } else {
        return UG_KP_ROOMS;
      }
    }
    if (courseType === 'PG') {
      if (semester === '1' || semester === '2') {
        return ['R1'];
      } else if (semester === '3' || semester === '4') {
        return ['R2'];
      }
    }
    return [];
  };

  const getBatchOptions = () => {
    if (courseType === 'UG') return UG_BATCHES;
    return [];
  };

  const getSemesterOptions = () => {
    let semesters = [];
    if (courseType === 'UG') semesters = SEMESTERS;
    if (courseType === 'PG') semesters = PG_SEMESTERS;
    return semesters.filter(s => {
      const num = parseInt(s, 10);
      if (semesterType === 'Odd') return num % 2 === 1;
      if (semesterType === 'Even') return num % 2 === 0;
      return true;
    });
  };

  const handleAssign = async () => {
    setError('');
    if (!room) {
      setError('Please select a room.');
      return;
    }
    setLoading(true);
    try {
      const payload = {
        courseType,
        semester,
        batch: courseType === 'UG' ? batch : null,
        room,
        assignedBy: user?.email || user?.id || 'coordinator',
        semesterType,
      };
      await timetableService.createRoomAllocation(payload);
      setRoom('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      await fetchAllocations();
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || err.message || 'Failed to assign room.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold mb-4 text-blue-900">Room Allocation Panel</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Semester Type</label>
          <select value={semesterType} onChange={e => {
            setSemesterType(e.target.value);
            const filtered = (courseType === 'UG' ? SEMESTERS : PG_SEMESTERS).filter(s => {
              const num = parseInt(s, 10);
              if (e.target.value === 'Odd') return num % 2 === 1;
              if (e.target.value === 'Even') return num % 2 === 0;
              return true;
            });
            setSemester(filtered[0] || '1');
            setBatch('N');
            setRoom('');
          }} className="w-full rounded border-gray-300 text-black">
            <option value="Odd">Odd</option>
            <option value="Even">Even</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Course Type</label>
          <select value={courseType} onChange={e => {
            setCourseType(e.target.value);
            const filtered = (e.target.value === 'UG' ? SEMESTERS : PG_SEMESTERS).filter(s => {
              const num = parseInt(s, 10);
              if (semesterType === 'Odd') return num % 2 === 1;
              if (semesterType === 'Even') return num % 2 === 0;
              return true;
            });
            setSemester(filtered[0] || '1');
            setBatch('N');
            setRoom('');
          }} className="w-full rounded border-gray-300 text-black">
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Semester</label>
          <select value={semester} onChange={e => {
            setSemester(e.target.value);
            setBatch('N');
            setRoom('');
          }} className="w-full rounded border-gray-300 text-black">
            {getSemesterOptions().map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {courseType === 'UG' && (
          <div>
            <label className="block text-sm font-medium mb-1 text-black">Batch</label>
            <select value={batch} onChange={e => setBatch(e.target.value)} className="w-full rounded border-gray-300 text-black">
              {getBatchOptions().map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        )}
        {courseType === 'UG' && (
          <div className="col-span-1 flex items-center mt-6">
            <input
              id="disabled-students-checkbox"
              type="checkbox"
              checked={hasDisabledStudents}
              onChange={e => setHasDisabledStudents(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="disabled-students-checkbox" className="text-sm text-black">
              Disabled students in batch
            </label>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1 text-black">Room</label>
          <select value={room} onChange={e => setRoom(e.target.value)} className="w-full rounded border-gray-300 text-black">
            <option value="">Select</option>
            {getRoomOptions().map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex items-end">
          <button onClick={handleAssign} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Assign</button>
        </div>
      </div>
      {/* Allocations Table */}
      <div className="mt-8">
        <h4 className="text-md font-semibold mb-2 text-blue-900">Allocated Rooms</h4>
        <table className="min-w-full bg-white border border-gray-300 text-black">
          <thead>
            <tr>
              <th className="border px-2 py-1">Room</th>
              <th className="border px-2 py-1">Batch</th>
              <th className="border px-2 py-1">Semester</th>
              <th className="border px-2 py-1">Course Type</th>
              <th className="border px-2 py-1">Semester Type</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((alloc) => (
              <tr key={alloc._id}>
                {editingId === alloc._id ? (
                  <>
                    <td className="border px-2 py-1"><input name="room" value={editData.room} onChange={handleEditChange} className="border rounded px-2 py-1 w-full" /></td>
                    <td className="border px-2 py-1"><input name="batch" value={editData.batch || ''} onChange={handleEditChange} className="border rounded px-2 py-1 w-full" /></td>
                    <td className="border px-2 py-1"><input name="semester" value={editData.semester} onChange={handleEditChange} className="border rounded px-2 py-1 w-full" /></td>
                    <td className="border px-2 py-1"><input name="courseType" value={editData.courseType} onChange={handleEditChange} className="border rounded px-2 py-1 w-full" /></td>
                    <td className="border px-2 py-1"><input name="semesterType" value={editData.semesterType} onChange={handleEditChange} className="border rounded px-2 py-1 w-full" /></td>
                    <td className="border px-2 py-1">
                      <button onClick={handleEditSave} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
                      <button onClick={handleEditCancel} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border px-2 py-1">{alloc.room}</td>
                    <td className="border px-2 py-1">{alloc.batch || '-'}</td>
                    <td className="border px-2 py-1">{alloc.semester}</td>
                    <td className="border px-2 py-1">{alloc.courseType}</td>
                    <td className="border px-2 py-1">{alloc.semesterType}</td>
                    <td className="border px-2 py-1">
                      <button onClick={() => handleEdit(alloc)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                      <button onClick={() => handleDelete(alloc._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {allocations.length === 0 && (
              <tr><td colSpan={6} className="text-center text-gray-500 py-2">No allocations found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50 transition-all">Room allocated successfully</div>
      )}
      {error && <div className="text-red-600 mb-2">{error}</div>}
    </div>
  );
};

const ROLES = ['Theory Teacher', 'Lab Incharge', 'Lab Assistant'];
const BATCHES = ['N', 'P', 'Q'];

const CoordinatorDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCreateTimetable = () => {
    if (user?.role === 'timetable_coordinator') {
      navigate('/timetable-builder');
    } else {
      console.error('User is not authorized as timetable_coordinator');
    }
  };

  // Manual faculty entry state
  const [courses, setCourses] = useState([]);
  const [facultyName, setFacultyName] = useState('');
  const [facultyCourses, setFacultyCourses] = useState([]); // [{course, role, batch}]
  const [manualMsg, setManualMsg] = useState('');
  const [manualLoading, setManualLoading] = useState(false);

  // Faculty assignment state
  const [allAssignments, setAllAssignments] = useState([]);
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [uploadResults, setUploadResults] = useState(null); // { successful: [], failed: [] }
  const [assignmentLoading, setAssignmentLoading] = useState(false);

  // Faculty summary
  const [facultyCount, setFacultyCount] = useState(0);

  // Remove global editAssignmentData and editingAssignmentId, use local state per row
  const [editingRowId, setEditingRowId] = useState(null);
  const [rowEditData, setRowEditData] = useState({});
  const [assignmentError, setAssignmentError] = useState('');
  const [assignmentSuccess, setAssignmentSuccess] = useState('');

  const handleEditAssignment = (assignment) => {
    if (!assignment._id) return;
    setEditingRowId(assignment._id);
    setRowEditData({
      courseCode: assignment.courseCode || '',
      role: assignment.role || '',
      batch: assignment.batch || '',
    });
  };

  const handleEditAssignmentChange = (e) => {
    const { name, value } = e.target;
    setRowEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAssignment = async (id) => {
    if (!id) return;
    // Validate required fields
    if (!rowEditData.courseCode || !rowEditData.role || !rowEditData.batch) {
      setAssignmentError('All fields are required.');
      return;
    }
    try {
      await facultyService.updateAssignment(id, {
        courseCode: rowEditData.courseCode,
        role: rowEditData.role,
        batch: rowEditData.batch,
      });
      setEditingRowId(null);
      setRowEditData({});
      setAssignmentError('');
      setAssignmentSuccess('Assignment updated successfully!');
      fetchAssignments();
      setTimeout(() => setAssignmentSuccess(''), 2000);
    } catch (err) {
      setAssignmentError('Failed to update assignment');
    }
  };

  const handleCancelEditAssignment = () => {
    setEditingRowId(null);
    setRowEditData({});
    setAssignmentError('');
  };

  const handleDeleteAssignment = async (id) => {
    if (!window.confirm('Are you sure you want to delete this assignment?')) return;
    try {
      await facultyService.deleteAssignment(id);
      fetchAssignments();
    } catch (err) {
      setAssignmentError('Failed to delete assignment');
    }
  };

  useEffect(() => {
    courseService.getAllCourses().then(setCourses).catch(() => setCourses([]));
    facultyService.getFacultySummary().then(res => setFacultyCount(res.totalFaculties)).catch(() => setFacultyCount(0));
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await facultyService.getAllAssignments();
      // Filter out assignments where faculty name is "Deleted Faculty"
      const filteredAssignments = (res.assignments || []).filter(
        assignment => assignment.facultyName !== 'Deleted Faculty'
      );
      setAllAssignments(filteredAssignments);
    } catch (error) {
      console.error("Failed to fetch assignments", error);
    }
  };

  // Manual faculty entry handlers
  const handleAddCourseRow = () => {
    setFacultyCourses([...facultyCourses, { course: '', role: ROLES[0], batch: BATCHES[0] }]);
  };
  const handleRemoveCourseRow = (idx) => {
    setFacultyCourses(facultyCourses.filter((_, i) => i !== idx));
  };
  const handleCourseChange = (idx, field, value) => {
    setFacultyCourses(facultyCourses.map((row, i) => i === idx ? { ...row, [field]: value } : row));
  };

  // Manual faculty entry submit
  const handleManualSubmit = async (e) => {
    e.preventDefault();
    setManualMsg('');
    setManualLoading(true);
    try {
      if (!facultyName || facultyCourses.length === 0 || facultyCourses.some(c => !c.course || !c.role || !c.batch)) {
        setManualMsg('Please fill all fields for all courses.');
        setManualLoading(false);
        return;
      }
      await facultyService.addFacultyManual({ name: facultyName, courses: facultyCourses });
      setManualMsg('Faculty added successfully!');
      setFacultyName('');
      setFacultyCourses([]);
      facultyService.getFacultySummary().then(res => setFacultyCount(res.totalFaculties));
    } catch (err) {
      setManualMsg(err.response?.data?.message || err.message || 'Error adding faculty.');
    } finally {
      setManualLoading(false);
    }
  };

  // Helper function to extract batch from course name
  const extractBatchFromCourseName = (courseName) => {
    if (!courseName) return null;
    const courseNameStr = String(courseName).trim();
    // Check for batch in parentheses: (N), (P), (Q)
    const parenthesesMatch = courseNameStr.match(/\(([NPQ])\)/);
    if (parenthesesMatch) {
      return parenthesesMatch[1];
    }
    // Check for batch separated by space: Course Name N, Course Name P, Course Name Q
    const words = courseNameStr.split(' ');
    const lastWord = words[words.length - 1];
    if (["N", "P", "Q"].includes(lastWord)) {
      return lastWord;
    }
    return null;
  };

  const handleFileUploadAndAssign = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setAssignmentLoading(true);
    setUploadResults(null);

    try {
      // 1. Parse the file
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);

      const allAssignments = [];
      let totalSheets = workbook.SheetNames.length;
      let processedSheets = 0;
      let totalRecords = 0;

      // Process each sheet
      for (const sheetName of workbook.SheetNames) {
        try {
          const worksheet = workbook.Sheets[sheetName];
          const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: null });

          if (rows.length === 0) continue;

          // Find header logic
          let headerRowIndex = -1;
          let mainHeaders = [];
          const mainHeaderKeywords = ['Course Code', 'Course Name'];
          for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (Array.isArray(row) && mainHeaderKeywords.every(k => row.some(h => h && String(h).includes(k)))) {
              headerRowIndex = i;
              mainHeaders = row.map(h => (h ? String(h).trim() : ''));
              break;
            }
          }
          if (headerRowIndex === -1) continue;

          const subHeaderRow = rows[headerRowIndex + 1] || [];
          const compositeHeaders = mainHeaders.map((mainHeader, index) => {
            const subHeader = subHeaderRow[index] ? String(subHeaderRow[index]).trim() : '';
            if (mainHeader.toLowerCase().includes('staff assigned') || mainHeader.toLowerCase().includes('others')) return subHeader || mainHeader;
            if (!mainHeader && subHeader) return subHeader;
            return mainHeader;
          });

          const codeIndex = compositeHeaders.findIndex(h => h.includes('Course Code'));
          const nameIndex = compositeHeaders.findIndex(h => h.includes('Course Name'));
          const theoryIndex = compositeHeaders.findIndex(h => h.includes('Theory'));
          const labICIndex = compositeHeaders.findIndex(h => h.includes('Lab (I/C)'));
          const labAIndex = compositeHeaders.findIndex(h => h.includes('Lab (A)'));

          let lastCourseCode = null, lastCourseName = null;
          for (let i = headerRowIndex + 2; i < rows.length; i++) {
            const row = rows[i];
            if (!Array.isArray(row) || row.every(cell => cell === null)) continue;
            const courseCode = row[codeIndex] || lastCourseCode;
            const courseName = row[nameIndex] || lastCourseName;
            if (!courseCode || !courseName) continue;
            lastCourseCode = courseCode;
            lastCourseName = courseName;
            const batch = extractBatchFromCourseName(courseName) || '-';
            const theoryFaculty = row[theoryIndex];
            const labICFaculty = row[labICIndex];
            const labAFaculty = row[labAIndex];
            if (theoryFaculty && theoryFaculty.trim() !== '-' && theoryFaculty.trim() !== '') {
              allAssignments.push({ courseCode, courseName, facultyName: theoryFaculty, role: 'Theory Teacher', batch, sourceSheet: sheetName });
            }
            if (labICFaculty && labICFaculty.trim() !== '-' && labICFaculty.trim() !== '') {
              allAssignments.push({ courseCode, courseName, facultyName: labICFaculty, role: 'Lab Incharge', batch, sourceSheet: sheetName });
            }
            if (labAFaculty && labAFaculty.trim() !== '-' && labAFaculty.trim() !== '') {
              allAssignments.push({ courseCode, courseName, facultyName: labAFaculty, role: 'Lab Assistant', batch, sourceSheet: sheetName });
            }
          }
        } catch (err) { continue; }
      }
      // Send assignments to backend
      await facultyService.uploadFacultyAssignments(allAssignments);
      setUploadResults({ successful: allAssignments.length, failed: 0 });
      fetchAssignments();
    } catch (err) {
      setUploadResults({ successful: 0, failed: 1 });
    } finally {
      setAssignmentLoading(false);
    }
  };

  return (
    <DashboardLayout role="coordinator" title="Coordinator Dashboard">
      <div className="space-y-6">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Timetable Management</h2>
            <button
              onClick={handleCreateTimetable}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Create New Timetable
            </button>
          </div>

          {/* Additional dashboard content can go here */}

          {/* Room/Lab Allocation Panel */}
          <RoomAllocationPanel user={user} />
        </div>
        {/* Faculty Summary */}
        <section className="bg-white rounded-lg shadow p-6 flex items-center justify-between mt-8">
          <h2 className="text-xl font-semibold text-black">Faculty Summary</h2>
          <div className="text-2xl font-bold text-blue-700">{facultyCount}</div>
        </section>
        {/* Manual Faculty Entry */}
        <section className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Manual Faculty Entry</h2>
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Faculty Name</label>
              <input type="text" value={facultyName} onChange={e => setFacultyName(e.target.value)} className="w-full border rounded px-3 py-2 text-black" required />
            </div>
            <div>
              <label className="block text-gray-700">Courses Handled</label>
              {facultyCourses.map((row, idx) => (
                <div key={idx} className="flex gap-2 items-center mb-2">
                  <select value={row.course} onChange={e => handleCourseChange(idx, 'course', e.target.value)} className="border rounded px-2 py-1 text-black" required>
                    <option value="">Select Course</option>
                    {courses.map(c => <option key={c.code} value={c.name}>{c.name}</option>)}
                  </select>
                  <select value={row.role} onChange={e => handleCourseChange(idx, 'role', e.target.value)} className="border rounded px-2 py-1 text-black" required>
                    {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
                  </select>
                  <select value={row.batch} onChange={e => handleCourseChange(idx, 'batch', e.target.value)} className="border rounded px-2 py-1 text-black" required>
                    {BATCHES.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <button type="button" onClick={() => handleRemoveCourseRow(idx)} className="text-red-600 font-bold">&times;</button>
                </div>
              ))}
              <button type="button" onClick={handleAddCourseRow} className="px-2 py-1 bg-blue-200 text-blue-800 rounded">+ Add Course</button>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={manualLoading}>{manualLoading ? 'Saving...' : 'Add Faculty'}</button>
            {manualMsg && <div className="mt-2 text-blue-700">{manualMsg}</div>}
          </form>
        </section>
        {/* Faculty Assignment Upload */}
        <section className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Upload and Assign Faculty (Excel)</h2>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUploadAndAssign} className="mb-4" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={assignmentLoading}>{assignmentLoading ? 'Uploading...' : 'Upload and Assign'}</button>
          {uploadResults && (
            <div className="mt-2 text-blue-700">
              {uploadResults.successful > 0 && <span>Successfully assigned {uploadResults.successful} faculty assignments.</span>}
              {uploadResults.failed > 0 && <span>Failed to assign some faculty assignments.</span>}
            </div>
          )}
        </section>
        {/* Faculty Assignments Table */}
        <section className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold text-black mb-4">Faculty Assignments</h2>
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full bg-white border border-gray-300 text-black">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-2 py-1">Course Code</th>
                  <th className="border px-2 py-1">Course Name</th>
                  <th className="border px-2 py-1">Faculty Name</th>
                  <th className="border px-2 py-1">Role</th>
                  <th className="border px-2 py-1">Batch</th>
                </tr>
              </thead>
              <tbody>
                {allAssignments.map((item) => {
                  if (!item._id) return null; // Only allow editing for assignments with a valid _id
                  const isEditing = editingRowId === item._id;
                  return (
                    <tr key={item._id}>
                      {isEditing ? (
                        <>
                          <td className="border px-2 py-1">
                            <select
                              name="courseCode"
                              value={rowEditData.courseCode || ''}
                              onChange={handleEditAssignmentChange}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="">Select Course</option>
                              {courses.map((c) => (
                                <option key={c.code} value={c.code}>{c.code}</option>
                              ))}
                            </select>
                          </td>
                          <td className="border px-2 py-1">{item.courseName}</td>
                          <td className="border px-2 py-1">{item.facultyName}</td>
                          <td className="border px-2 py-1">
                            <select
                              name="role"
                              value={rowEditData.role || ''}
                              onChange={handleEditAssignmentChange}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="">Select Role</option>
                              {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
                            </select>
                          </td>
                          <td className="border px-2 py-1">
                            <select
                              name="batch"
                              value={rowEditData.batch || ''}
                              onChange={handleEditAssignmentChange}
                              className="border rounded px-2 py-1 w-full"
                            >
                              <option value="">Select Batch</option>
                              {BATCHES.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                          </td>
                          <td className="border px-2 py-1">
                            <button onClick={() => handleSaveAssignment(item._id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
                            <button onClick={handleCancelEditAssignment} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="border px-2 py-1">{item.courseCode}</td>
                          <td className="border px-2 py-1">{item.courseName}</td>
                          <td className="border px-2 py-1">{item.facultyName}</td>
                          <td className="border px-2 py-1">{item.role}</td>
                          <td className="border px-2 py-1">{item.batch || 'All'}</td>
                          <td className="border px-2 py-1">
                            <button onClick={() => handleEditAssignment(item)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                            <button onClick={() => handleDeleteAssignment(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        {assignmentError && <div className="text-red-600 mt-2">{assignmentError}</div>}
        {assignmentSuccess && <div className="text-green-600 mt-2">{assignmentSuccess}</div>}
      </div>
    </DashboardLayout>
  );
};

export default CoordinatorDashboard; 