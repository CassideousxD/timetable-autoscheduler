import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return null;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // Redirect to appropriate dashboard if role is not allowed
    const dashboardRoutes = {
      admin: '/admin-dashboard',
      faculty: '/faculty-dashboard',
      hod: '/hod-dashboard',
      timetable_coordinator: '/timetable-coordinator-dashboard',
    };
    const redirectPath = dashboardRoutes[user?.role] || '/login';
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute; 