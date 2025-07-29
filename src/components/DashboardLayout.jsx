import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = ({ children, role, title }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  const getMenuItems = () => {
    switch (role) {
      case 'admin':
        return [
          { label: 'Upload Electives', path: '/admin/electives' },
          { label: 'System Management', path: '/admin/system' },
          { label: 'Reports', path: '/admin/reports' }
        ];
      case 'faculty':
        return [
          { label: 'Submit Preferences', path: '/faculty/preferences' },
          { label: 'View Schedule', path: '/faculty/schedule' }
        ];
      case 'hod':
        return [
          { label: 'View Allocations', path: '/hod/allocations' },
          { label: 'Department Reports', path: '/hod/reports' }
        ];
      case 'coordinator':
        return [
          { label: 'Timetable Builder', path: '/timetable-builder' },
          { label: 'Workload Management', path: '/coordinator/workload' }
        ];
      default:
        return [];
    }
  };

  const getGuideMePath = () => {
    switch (role) {
      case 'admin':
        return '/admin-guide-me';
      case 'hod':
        return '/hod-guide-me';
      case 'faculty':
        return '/faculty-guide-me';
      case 'timetable_coordinator':
        return '/guide-me';
      default:
        return '/guide-me';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="flex items-center px-4 sm:px-8 py-3 gap-4">
          <Logo size="default" className="mr-2" role={role} />
          <div className="flex-1" />
          <Link
            to={getGuideMePath()}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Guide Me
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1 p-6 w-full max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout; 