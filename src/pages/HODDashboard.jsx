import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { timetableService } from '../services/timetableService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TIME_SLOTS = ['08:30-09:20', '09:25-10:15', '10:30-11:20', '11:25-12:15', '01:10-02:00', '02:05-02:55', '03:00-03:50', '03:55-04:45'];

const PG_BATCHES = ['PG', 'PG Batch'];
const PG_SEMESTERS = ['SEM-1', 'SEM-2', 'SEM-3', 'SEM-4', 'SEM-1 PLAN-A', 'SEM-1 PLAN-B', 'SEM-1 PLAN-C', 'SEM-2 PLAN-A', 'SEM-2 PLAN-B', 'SEM-2 PLAN-C'];

const HODDashboard = () => {
  const [timetables, setTimetables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchTimetables = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await timetableService.getAllTimetables();
        setTimetables(data);
      } catch (err) {
        setError('Failed to fetch timetables');
      } finally {
        setLoading(false);
      }
    };
    fetchTimetables();
  }, []);

  // Organize timetables by UG/PG, then semester, then batch
  const organized = {};
  timetables.forEach(tt => {
    const isPG = PG_BATCHES.includes(tt.batch) || PG_SEMESTERS.includes(tt.semester);
    const type = isPG ? 'PG' : 'UG';
    if (!organized[type]) organized[type] = {};
    if (!organized[type][tt.semester]) organized[type][tt.semester] = {};
    organized[type][tt.semester][tt.batch] = tt.timetable;
  });

  // Dropdown options
  const typeOptions = Object.keys(organized);
  const semesterOptions = selectedType ? Object.keys(organized[selectedType] || {}) : [];
  const batchOptions = selectedType && selectedSemester ? Object.keys(organized[selectedType][selectedSemester] || {}) : [];

  // Set defaults when options change
  useEffect(() => {
    if (typeOptions.length && !selectedType) {
      setSelectedType(typeOptions[0]);
    }
  }, [typeOptions]);
  useEffect(() => {
    if (semesterOptions.length && !semesterOptions.includes(selectedSemester)) {
      setSelectedSemester(semesterOptions[0]);
    }
  }, [semesterOptions, selectedSemester]);
  useEffect(() => {
    if (batchOptions.length && !batchOptions.includes(selectedBatch)) {
      setSelectedBatch(batchOptions[0]);
    }
  }, [batchOptions, selectedBatch]);

  const renderTimetableGrid = (timetable, batch) => (
    <div className="overflow-x-auto mt-6 mb-10">
      <h3 className="text-lg font-semibold text-blue-900 mb-2">Batch: {batch}</h3>
      <table className="min-w-full bg-white border border-gray-300 text-black">
        <thead>
          <tr>
            <th className="border px-2 py-1">Day</th>
            {TIME_SLOTS.map(slot => (
              <th key={slot} className="border px-2 py-1">{slot}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAYS.map(day => (
            <tr key={day}>
              <td className="border px-2 py-1 font-semibold">{day}</td>
              {TIME_SLOTS.map(slot => {
                const cell = timetable?.[day]?.[slot];
                return (
                  <td key={slot} className="border px-2 py-1">
                    {cell && cell.name ? (
                      <div>
                        <div className="font-medium text-sm">{cell.name}</div>
                        <div className="text-xs text-gray-600">{cell.faculty}</div>
                        <div className="text-xs text-gray-500">{cell.code}</div>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs">-</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <DashboardLayout role="hod">
      <div className="max-w-6xl mx-auto py-8 space-y-10">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">All Timetables</h1>
        {loading && <div className="text-blue-700">Loading timetables...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && Object.keys(organized).length === 0 && (
          <div className="text-gray-500">No timetables found.</div>
        )}
        {!loading && !error && Object.keys(organized).length > 0 && (
          <div className="mb-8 flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold text-black mb-1">Type</label>
              <select className="border rounded px-3 py-2 text-black" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                {typeOptions.map(type => (
                  <option key={type} value={type}>{type === 'UG' ? 'Undergraduate (UG)' : 'Postgraduate (PG)'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-1">Semester</label>
              <select className="border rounded px-3 py-2 text-black" value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)}>
                {semesterOptions.map(sem => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-1">Batch</label>
              <select className="border rounded px-3 py-2 text-black" value={selectedBatch} onChange={e => setSelectedBatch(e.target.value)}>
                {batchOptions.map(batch => (
                  <option key={batch} value={batch}>{batch}</option>
                ))}
              </select>
            </div>
          </div>
        )}
        {!loading && !error && selectedType && selectedSemester && selectedBatch && organized[selectedType]?.[selectedSemester]?.[selectedBatch] && (
          renderTimetableGrid(organized[selectedType][selectedSemester][selectedBatch], selectedBatch)
        )}
      </div>
    </DashboardLayout>
  );
};

export default HODDashboard; 