import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import bgImage from '../assets/th.jpg';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'faculty',
  });
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'faculty',
  });
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register } = useAuth();
  const allowedRegisterRole = 'faculty';

  const roleDashboardMap = {
    admin: '/admin-dashboard',
    faculty: '/faculty-dashboard',
    hod: '/hod-dashboard',
    coordinator: '/coordinator-dashboard',
    timetable_coordinator: '/timetable-coordinator-dashboard',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isRegister) {
      // Prevent changing role to non-faculty during registration
      if (name === 'role' && value !== allowedRegisterRole) return;
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    } else {
      setCredentials((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (isRegister) {
      if (registerData.password !== registerData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      const result = await register(registerData);
      if (result.success) {
        setIsRegister(false);
        setError('Registration successful! Please log in.');
        setRegisterData({ email: '', password: '', confirmPassword: '', role: 'faculty' });
      } else {
        setError(result.error || 'Registration failed');
      }
      setLoading(false);
      return;
    }
    try {
      const result = await login(credentials);
      if (result.success) {
        // Use the role from the user object in AuthContext if available
        const userRole = result.user?.role || credentials.role;
        const dashboardPath = roleDashboardMap[userRole] || '/login';
        navigate(dashboardPath, { replace: true });
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgb(15, 15, 15)',
          backdropFilter: 'blur(4px)',
          zIndex: 1,
        }}
      />
      <div
        className="relative z-10 flex flex-col items-center justify-center"
        style={{ minWidth: 350, maxWidth: 400, width: '100%' }}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl w-full p-10 border border-gray-700">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-wide drop-shadow">
            {isRegister ? 'Register' : 'Sign in'}
          </h2>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:shadow-outline text-lg placeholder-gray-400"
                id="email"
                type="email"
                name="email"
                value={isRegister ? registerData.email : credentials.email}
                onChange={handleChange}
                required
                disabled={loading}
                autoComplete="username"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:shadow-outline text-lg placeholder-gray-400"
                id="password"
                type="password"
                name="password"
                value={isRegister ? registerData.password : credentials.password}
                onChange={handleChange}
                required
                disabled={loading}
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                placeholder="Enter your password"
              />
            </div>
            {isRegister && (
              <div className="mb-6">
                <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:shadow-outline text-lg placeholder-gray-400"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                />
              </div>
            )}
            <div className="mb-8">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="role">
                Role
              </label>
              <select
                className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 text-white bg-gray-900/80 leading-tight focus:outline-none focus:shadow-outline text-lg"
                id="role"
                name="role"
                value={isRegister ? registerData.role : credentials.role}
                onChange={handleChange}
                disabled={loading || (isRegister && true)}
              >
                <option value="admin">Admin</option>
                <option value="faculty">Faculty</option>
                <option value="hod">HOD</option>
                <option value="timetable_coordinator">Timetable Coordinator</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline w-full text-lg transition duration-200 ease-in-out shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-800'
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? (isRegister ? 'Registering...' : 'Signing in...') : isRegister ? 'Register' : 'Sign In'}
              </button>
            </div>
          </form>
          {/* Registration toggle only for faculty */}
          {!isRegister && credentials.role === allowedRegisterRole && (
            <div className="mt-6 text-center">
              <button
                className="text-blue-400 hover:underline focus:outline-none"
                type="button"
                onClick={() => {
                  setIsRegister(true);
                  setError('');
                  setRegisterData({ email: '', password: '', confirmPassword: '', role: allowedRegisterRole });
                }}
              >
                {"Don't have an account? Register as Faculty"}
              </button>
            </div>
          )}
          {isRegister && (
            <div className="mt-6 text-center">
              <button
                className="text-blue-400 hover:underline focus:outline-none"
                type="button"
                onClick={() => {
                  setIsRegister(false);
                  setError('');
                }}
              >
                {'Already have an account? Sign in'}
              </button>
            </div>
          )}
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Timetable Management &nbsp;|&nbsp;
            <a href="/about" className="text-blue-600 hover:underline">About Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;