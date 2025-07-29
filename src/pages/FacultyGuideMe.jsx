import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FacultyGuideMe = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '👨‍🏫' },
    { id: 'timetable-viewing', title: 'Timetable Viewing', icon: '📅' },
    { id: 'preferences', title: 'Preferences', icon: '⚙️' },
    { id: 'workload-summary', title: 'Workload Summary', icon: '📊' },
    { id: 'course-assignments', title: 'Course Assignments', icon: '📚' },
    { id: 'communication', title: 'Communication', icon: '💬' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Welcome to Faculty Dashboard</h3>
              <p className="text-gray-300 mb-4">
                As a Faculty member, you can view your personal timetable, submit preferences, access course materials, and monitor your workload. This dashboard provides all the tools you need to manage your teaching schedule effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">📅 Timetable Viewing</h4>
                  <p className="text-sm text-gray-300">View your personal teaching schedule and course assignments</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">⚙️ Preferences</h4>
                  <p className="text-sm text-gray-300">Submit your teaching preferences and constraints</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">📊 Workload Summary</h4>
                  <p className="text-sm text-gray-300">Monitor your teaching hours and course load</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Faculty Quick Start Guide</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong>View Your Timetable:</strong> Check your current teaching schedule</li>
                <li><strong>Review Course Assignments:</strong> See which courses you're assigned to teach</li>
                <li><strong>Submit Preferences:</strong> Provide your teaching preferences and constraints</li>
                <li><strong>Monitor Workload:</strong> Check your teaching hours and course load</li>
                <li><strong>Access Materials:</strong> View course materials and resources</li>
                <li><strong>Report Issues:</strong> Contact administration for any concerns</li>
              </ol>
            </div>
          </div>
        );

      case 'timetable-viewing':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Timetable Viewing Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Personal Timetable Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">📅 Schedule View</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Weekly timetable display</li>
                        <li>Day-wise schedule</li>
                        <li>Time slot details</li>
                        <li>Room assignments</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">📋 Course Details</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Course names and codes</li>
                        <li>Batch information</li>
                        <li>Semester details</li>
                        <li>Course type (Theory/Lab)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Timetable Navigation</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Week View:</strong> View your schedule for the entire week</li>
                    <li><strong>Day View:</strong> Focus on a specific day's schedule</li>
                    <li><strong>Filter Options:</strong> Filter by course type or batch</li>
                    <li><strong>Export Options:</strong> Download timetable as PDF or Excel</li>
                    <li><strong>Print Function:</strong> Print your timetable for reference</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Understanding Your Schedule</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Time Slots:</strong> Each class has specific time slots (e.g., 08:30-09:20)</li>
                    <li><strong>Room Assignments:</strong> Check which room you're assigned to</li>
                    <li><strong>Course Types:</strong> Theory classes vs Lab sessions</li>
                    <li><strong>Batch Information:</strong> Which student batch you're teaching</li>
                    <li><strong>Semester Details:</strong> Which semester the course belongs to</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Schedule Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Check:</strong> Check your timetable regularly for updates</li>
                    <li><strong>Conflict Detection:</strong> Report any schedule conflicts immediately</li>
                    <li><strong>Room Familiarity:</strong> Familiarize yourself with assigned rooms</li>
                    <li><strong>Time Management:</strong> Plan your day around your teaching schedule</li>
                    <li><strong>Backup Planning:</strong> Have backup plans for technical issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Preferences Submission Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Preference Types</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">⏰ Time Preferences</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Preferred time slots</li>
                        <li>Preferred days</li>
                        <li>Free day requests</li>
                        <li>First hour preferences</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">🏢 Location Preferences</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Preferred classrooms</li>
                        <li>Lab floor preferences</li>
                        <li>Building preferences</li>
                        <li>Accessibility requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Course Preferences</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Subject Preferences:</strong> Indicate your preferred subjects to teach</li>
                    <li><strong>Course Level:</strong> Specify UG or PG course preferences</li>
                    <li><strong>Semester Preferences:</strong> Indicate preferred semesters</li>
                    <li><strong>Batch Preferences:</strong> Specify preferred student batches</li>
                    <li><strong>Role Preferences:</strong> Theory Teacher vs Lab Incharge preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Constraint Submission</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Availability Constraints:</strong> Submit your availability limitations</li>
                    <li><strong>Health Constraints:</strong> Report any health-related restrictions</li>
                    <li><strong>Personal Constraints:</strong> Submit personal schedule conflicts</li>
                    <li><strong>Professional Constraints:</strong> Report research or administrative commitments</li>
                    <li><strong>Travel Constraints:</strong> Indicate travel or conference schedules</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Submission Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Access Preferences Form:</strong> Navigate to the preferences section</li>
                    <li><strong>Fill Required Fields:</strong> Complete all mandatory preference fields</li>
                    <li><strong>Add Optional Preferences:</strong> Include any additional preferences</li>
                    <li><strong>Review Submission:</strong> Double-check all entered information</li>
                    <li><strong>Submit Form:</strong> Submit your preferences for consideration</li>
                    <li><strong>Confirmation:</strong> Receive confirmation of your submission</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );

      case 'workload-summary':
        return (
          <div className="space-y-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Workload Summary Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Workload Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📊 Teaching Hours</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Total teaching hours</li>
                        <li>Theory hours</li>
                        <li>Lab hours</li>
                        <li>Hours per week</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">📚 Course Load</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Number of courses</li>
                        <li>Course distribution</li>
                        <li>Semester-wise load</li>
                        <li>Role assignments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Workload Analysis</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Weekly Distribution:</strong> See how your hours are distributed across the week</li>
                    <li><strong>Daily Breakdown:</strong> View your daily teaching schedule</li>
                    <li><strong>Course-wise Analysis:</strong> See hours per course</li>
                    <li><strong>Role-wise Breakdown:</strong> Theory Teacher vs Lab Incharge hours</li>
                    <li><strong>Semester Comparison:</strong> Compare workload across semesters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Workload Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Check:</strong> Monitor your workload regularly</li>
                    <li><strong>Load Verification:</strong> Verify your teaching hours are accurate</li>
                    <li><strong>Balance Assessment:</strong> Assess if your workload is balanced</li>
                    <li><strong>Overload Detection:</strong> Identify if you're overloaded</li>
                    <li><strong>Underload Detection:</strong> Identify if you need more assignments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Workload Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Time Planning:</strong> Plan your time effectively around teaching</li>
                    <li><strong>Preparation Time:</strong> Allocate time for course preparation</li>
                    <li><strong>Research Time:</strong> Balance teaching with research activities</li>
                    <li><strong>Administrative Duties:</strong> Consider administrative responsibilities</li>
                    <li><strong>Personal Time:</strong> Maintain work-life balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'course-assignments':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Course Assignments Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Assignment Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📚 Course Details</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Course codes and names</li>
                        <li>Course descriptions</li>
                        <li>Credit hours</li>
                        <li>Course objectives</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">👥 Student Information</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Student batches</li>
                        <li>Class sizes</li>
                        <li>Semester information</li>
                        <li>Student level (UG/PG)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Role Assignments</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Theory Teacher:</strong> Responsible for theory sessions</li>
                    <li><strong>Lab Incharge:</strong> Responsible for laboratory sessions</li>
                    <li><strong>Lab Assistant:</strong> Support role in laboratory sessions</li>
                    <li><strong>Course Coordinator:</strong> Overall course coordination</li>
                    <li><strong>Multiple Roles:</strong> May have different roles for different courses</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Assignment Verification</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Course Review:</strong> Review assigned courses thoroughly</li>
                    <li><strong>Role Confirmation:</strong> Confirm your role for each course</li>
                    <li><strong>Schedule Verification:</strong> Verify teaching schedule</li>
                    <li><strong>Resource Check:</strong> Ensure required resources are available</li>
                    <li><strong>Expertise Match:</strong> Confirm you're qualified for assigned courses</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Course Preparation</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Syllabus Review:</strong> Review course syllabus and objectives</li>
                    <li><strong>Material Preparation:</strong> Prepare course materials and resources</li>
                    <li><strong>Assessment Planning:</strong> Plan assessments and evaluations</li>
                    <li><strong>Technology Setup:</strong> Set up required technology and tools</li>
                    <li><strong>Communication Plan:</strong> Plan communication with students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'communication':
        return (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Communication Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Communication Channels</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📧 System Communication</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>In-system messaging</li>
                        <li>Notification system</li>
                        <li>Update alerts</li>
                        <li>Status notifications</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">👥 Administrative Contact</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>HOD communication</li>
                        <li>Coordinator contact</li>
                        <li>Admin support</li>
                        <li>Technical support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Issue Reporting</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Schedule Conflicts:</strong> Report any timetable conflicts immediately</li>
                    <li><strong>Resource Issues:</strong> Report classroom or equipment problems</li>
                    <li><strong>Workload Concerns:</strong> Report excessive or insufficient workload</li>
                    <li><strong>Technical Problems:</strong> Report system or access issues</li>
                    <li><strong>Course Issues:</strong> Report course-related problems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Communication Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Timely Communication:</strong> Report issues as soon as they arise</li>
                    <li><strong>Clear Description:</strong> Provide clear and detailed descriptions</li>
                    <li><strong>Professional Tone:</strong> Maintain professional communication</li>
                    <li><strong>Follow-up:</strong> Follow up on reported issues</li>
                    <li><strong>Documentation:</strong> Keep records of important communications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Support Resources</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Help Documentation:</strong> Access system help and guides</li>
                    <li><strong>FAQ Section:</strong> Check frequently asked questions</li>
                    <li><strong>Contact Information:</strong> Find relevant contact details</li>
                    <li><strong>Training Resources:</strong> Access training materials</li>
                    <li><strong>Feedback Channels:</strong> Provide system feedback</li>
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
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Faculty Troubleshooting Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Common Faculty Issues</h4>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Cannot access timetable</h5>
                      <p className="text-sm text-gray-300">Solution: Check login credentials and contact admin if issues persist</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Schedule conflicts</h5>
                      <p className="text-sm text-gray-300">Solution: Report conflicts immediately to HOD or coordinator</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Incorrect course assignments</h5>
                      <p className="text-sm text-gray-300">Solution: Contact HOD to verify and correct assignments</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Technical Issues</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Login Problems:</strong> Clear browser cache and try again</li>
                    <li><strong>Display Issues:</strong> Check browser compatibility and settings</li>
                    <li><strong>Print Problems:</strong> Ensure printer is connected and configured</li>
                    <li><strong>Export Issues:</strong> Check file permissions and disk space</li>
                    <li><strong>Performance Issues:</strong> Close unnecessary browser tabs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Workload Issues</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Excessive Workload:</strong> Contact HOD to discuss workload distribution</li>
                    <li><strong>Insufficient Workload:</strong> Request additional assignments</li>
                    <li><strong>Unbalanced Schedule:</strong> Request schedule adjustments</li>
                    <li><strong>Role Conflicts:</strong> Clarify role assignments with HOD</li>
                    <li><strong>Resource Issues:</strong> Report resource inadequacies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Check:</strong> Check your timetable regularly</li>
                    <li><strong>Timely Reporting:</strong> Report issues immediately</li>
                    <li><strong>Professional Communication:</strong> Maintain professional tone</li>
                    <li><strong>Documentation:</strong> Keep records of important communications</li>
                    <li><strong>Proactive Approach:</strong> Address potential issues early</li>
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
          <h1 className="text-4xl font-bold text-white mb-4">👨‍🏫 Faculty Guide - Teaching Management</h1>
          <p className="text-gray-300 text-lg">Complete guide to managing your teaching schedule and preferences</p>
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
                    ? 'bg-green-600 text-white shadow-lg'
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

        {/* Back to Faculty Button */}
        <div className="text-center mt-8">
          <Link
            to="/faculty-dashboard"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Faculty Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacultyGuideMe; 