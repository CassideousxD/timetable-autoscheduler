import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminGuideMe = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '👑' },
    { id: 'user-management', title: 'User Management', icon: '👥' },
    { id: 'system-config', title: 'System Config', icon: '⚙️' },
    { id: 'data-management', title: 'Data Management', icon: '📊' },
    { id: 'reports', title: 'Reports & Analytics', icon: '📈' },
    { id: 'security', title: 'Security & Access', icon: '🔒' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Welcome to Admin Dashboard</h3>
              <p className="text-gray-300 mb-4">
                As an Administrator, you have complete control over the Timetable Management System. You can manage users, configure system settings, and oversee all operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">👥 User Management</h4>
                  <p className="text-sm text-gray-300">Create, edit, and manage user accounts and roles</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">⚙️ System Configuration</h4>
                  <p className="text-sm text-gray-300">Configure system settings and preferences</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">📊 Data Management</h4>
                  <p className="text-sm text-gray-300">Manage courses, faculty, and system data</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Admin Quick Start Guide</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong>Review System Status:</strong> Check current system health and user activity</li>
                <li><strong>Manage Users:</strong> Create and configure user accounts for different roles</li>
                <li><strong>Configure Settings:</strong> Set up system preferences and constraints</li>
                <li><strong>Monitor Data:</strong> Review and manage courses, faculty, and timetables</li>
                <li><strong>Generate Reports:</strong> Create comprehensive system reports</li>
                <li><strong>Security Audit:</strong> Review access logs and security settings</li>
              </ol>
            </div>
          </div>
        );

      case 'user-management':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">User Management Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">User Roles Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">👨‍🏫 Faculty</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>View personal timetable</li>
                        <li>Submit preferences</li>
                        <li>Access course materials</li>
                        <li>View workload summary</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">🎯 HOD</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Department oversight</li>
                        <li>Faculty management</li>
                        <li>Department reports</li>
                        <li>Allocation approval</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-orange-300 mb-2">📋 Coordinator</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Workload management</li>
                        <li>Course assignments</li>
                        <li>Room allocations</li>
                        <li>Schedule coordination</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-red-300 mb-2">🔧 Timetable Coordinator</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Create timetables</li>
                        <li>Auto-scheduling</li>
                        <li>Lab management</li>
                        <li>Export timetables</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">User Management Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Create User Account:</strong> Add new users with appropriate roles</li>
                    <li><strong>Assign Permissions:</strong> Set role-based access controls</li>
                    <li><strong>Configure Settings:</strong> Set user preferences and constraints</li>
                    <li><strong>Monitor Activity:</strong> Track user login and activity logs</li>
                    <li><strong>Manage Access:</strong> Enable/disable accounts as needed</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Role Assignment Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Principle of Least Privilege:</strong> Assign minimum required permissions</li>
                    <li><strong>Role Separation:</strong> Separate duties between different roles</li>
                    <li><strong>Regular Review:</strong> Periodically review user permissions</li>
                    <li><strong>Documentation:</strong> Maintain records of role assignments</li>
                    <li><strong>Training:</strong> Ensure users understand their role responsibilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'system-config':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">System Configuration Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-200 mb-2">System Settings</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">🕒 Time Settings</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Class time slots</li>
                        <li>Lunch break duration</li>
                        <li>Working hours</li>
                        <li>Holiday calendar</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">🏢 Room Configuration</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Classroom capacity</li>
                        <li>Lab floor assignments</li>
                        <li>Room availability</li>
                        <li>Equipment mapping</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Academic Configuration</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Semester Structure:</strong> Configure UG (8 semesters) and PG (4 semesters)</li>
                    <li><strong>Batch Management:</strong> Set up UG batches (N, P, Q) and PG batch</li>
                    <li><strong>Course Categories:</strong> Define Theory, Lab, and Lab Integrated Theory</li>
                    <li><strong>Credit System:</strong> Configure credit hours and workload calculations</li>
                    <li><strong>Faculty Roles:</strong> Set up Theory Teacher, Lab Incharge, Lab Assistant</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Scheduling Constraints</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Faculty Constraints:</strong> Free day rules, first hour limits</li>
                    <li><strong>Lab Constraints:</strong> Floor assignments, consecutive hours</li>
                    <li><strong>Course Constraints:</strong> Theory/lab limits, credit mapping</li>
                    <li><strong>Time Constraints:</strong> Lunch breaks, working hours</li>
                    <li><strong>Conflict Prevention:</strong> Double booking prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'data-management':
        return (
          <div className="space-y-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Data Management Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Course Management</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📚 UG Courses</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Semester 1-8 courses</li>
                        <li>Theory and lab courses</li>
                        <li>Lab Integrated Theory</li>
                        <li>Credit hour mapping</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">🎯 PG Courses</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Semester 1-4 courses</li>
                        <li>Specialized subjects</li>
                        <li>Research components</li>
                        <li>Advanced topics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Faculty Data Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Faculty Profiles:</strong> Personal information, qualifications, specializations</li>
                    <li><strong>Course Assignments:</strong> Theory Teacher, Lab Incharge, Lab Assistant roles</li>
                    <li><strong>Availability Settings:</strong> Working hours, free days, constraints</li>
                    <li><strong>Workload Tracking:</strong> Teaching hours, course load monitoring</li>
                    <li><strong>Performance Metrics:</strong> Teaching effectiveness, student feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Timetable Data</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Generated Timetables:</strong> Auto-scheduled and manual timetables</li>
                    <li><strong>Lab Schedules:</strong> Floor-wise lab assignments</li>
                    <li><strong>Faculty Schedules:</strong> Individual faculty timetables</li>
                    <li><strong>Conflict Resolution:</strong> Overlap detection and resolution</li>
                    <li><strong>Version Control:</strong> Timetable history and updates</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Data Import/Export</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Excel Import:</strong> Bulk course and faculty data import</li>
                    <li><strong>PDF Export:</strong> Professional timetable reports</li>
                    <li><strong>Data Backup:</strong> Regular system backups</li>
                    <li><strong>Data Validation:</strong> Import data verification</li>
                    <li><strong>Format Standards:</strong> Maintained data format consistency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Reports & Analytics Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">System Reports</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📊 Usage Analytics</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>User activity logs</li>
                        <li>System performance</li>
                        <li>Feature utilization</li>
                        <li>Error tracking</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">👥 User Reports</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>User registration</li>
                        <li>Role distribution</li>
                        <li>Login statistics</li>
                        <li>Access patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Academic Reports</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Timetable Reports:</strong> Schedule completion, conflict analysis</li>
                    <li><strong>Faculty Workload:</strong> Teaching hours, course distribution</li>
                    <li><strong>Room Utilization:</strong> Classroom and lab usage statistics</li>
                    <li><strong>Course Coverage:</strong> Subject-wise scheduling analysis</li>
                    <li><strong>Constraint Violations:</strong> Scheduling rule compliance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Operational Reports</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>System Health:</strong> Performance metrics, uptime statistics</li>
                    <li><strong>Data Quality:</strong> Completeness, accuracy, consistency checks</li>
                    <li><strong>Security Reports:</strong> Access logs, authentication attempts</li>
                    <li><strong>Backup Status:</strong> Data backup completion and integrity</li>
                    <li><strong>Maintenance Logs:</strong> System updates and maintenance records</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Report Generation</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Select Report Type:</strong> Choose from available report categories</li>
                    <li><strong>Set Parameters:</strong> Define date ranges, filters, and criteria</li>
                    <li><strong>Generate Report:</strong> Execute report generation process</li>
                    <li><strong>Review Data:</strong> Verify accuracy and completeness</li>
                    <li><strong>Export/Share:</strong> Download or share reports as needed</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Security & Access Control Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Access Control</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">🔐 Authentication</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Password policies</li>
                        <li>Session management</li>
                        <li>Multi-factor auth</li>
                        <li>Login attempts</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">🚪 Authorization</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Role-based access</li>
                        <li>Permission levels</li>
                        <li>Feature restrictions</li>
                        <li>Data access control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Security Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Access Logs:</strong> Track all user login and logout activities</li>
                    <li><strong>Activity Monitoring:</strong> Monitor user actions and system changes</li>
                    <li><strong>Security Alerts:</strong> Real-time notifications for suspicious activities</li>
                    <li><strong>Audit Trails:</strong> Complete history of system modifications</li>
                    <li><strong>Incident Response:</strong> Procedures for security breach handling</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Data Protection</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Data Encryption:</strong> Secure storage and transmission of sensitive data</li>
                    <li><strong>Backup Security:</strong> Protected backup storage and access</li>
                    <li><strong>Data Retention:</strong> Policies for data storage and deletion</li>
                    <li><strong>Privacy Compliance:</strong> Adherence to data protection regulations</li>
                    <li><strong>Data Recovery:</strong> Procedures for data restoration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Security Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Updates:</strong> Keep system and security patches current</li>
                    <li><strong>Password Policies:</strong> Enforce strong password requirements</li>
                    <li><strong>Session Management:</strong> Implement proper session timeouts</li>
                    <li><strong>Access Reviews:</strong> Periodic review of user permissions</li>
                    <li><strong>Security Training:</strong> Educate users on security practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Admin Troubleshooting Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Common Admin Issues</h4>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: User cannot access system</h5>
                      <p className="text-sm text-gray-300">Solution: Check user account status, role assignments, and permissions</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: System performance issues</h5>
                      <p className="text-sm text-gray-300">Solution: Monitor system resources, check logs, optimize database</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Data inconsistency</h5>
                      <p className="text-sm text-gray-300">Solution: Run data validation, check import processes, verify backups</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">System Maintenance</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Backups:</strong> Schedule automated backup procedures</li>
                    <li><strong>Database Optimization:</strong> Monitor and optimize database performance</li>
                    <li><strong>Log Management:</strong> Regular log rotation and cleanup</li>
                    <li><strong>Security Updates:</strong> Apply security patches promptly</li>
                    <li><strong>System Monitoring:</strong> Continuous monitoring of system health</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Emergency Procedures</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>System Recovery:</strong> Procedures for system restoration</li>
                    <li><strong>Data Recovery:</strong> Steps for data restoration from backups</li>
                    <li><strong>User Communication:</strong> Notify users of system issues</li>
                    <li><strong>Escalation Process:</strong> When to escalate to technical support</li>
                    <li><strong>Documentation:</strong> Maintain records of incidents and resolutions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Prevention Strategies</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Proactive Monitoring:</strong> Regular system health checks</li>
                    <li><strong>User Training:</strong> Educate users on proper system usage</li>
                    <li><strong>Change Management:</strong> Controlled system modifications</li>
                    <li><strong>Testing Procedures:</strong> Test changes before deployment</li>
                    <li><strong>Documentation:</strong> Maintain comprehensive system documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">👑 Admin Guide - System Administration</h1>
          <p className="text-gray-300 text-lg">Complete guide to administering the Timetable Management System</p>
        </div>

        {/* Navigation */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="text-lg mb-1">{section.icon}</div>
                <div>{section.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          {renderContent()}
        </div>

        {/* Back to Admin Button */}
        <div className="text-center mt-8">
          <Link
            to="/admin-dashboard"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminGuideMe; 