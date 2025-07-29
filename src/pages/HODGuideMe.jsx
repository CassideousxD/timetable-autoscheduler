import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HODGuideMe = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: '🎯' },
    { id: 'department-oversight', title: 'Department Oversight', icon: '🏢' },
    { id: 'faculty-management', title: 'Faculty Management', icon: '👨‍🏫' },
    { id: 'workload-monitoring', title: 'Workload Monitoring', icon: '📊' },
    { id: 'allocation-approval', title: 'Allocation Approval', icon: '✅' },
    { id: 'reports', title: 'Department Reports', icon: '📈' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Welcome to HOD Dashboard</h3>
              <p className="text-gray-300 mb-4">
                As a Head of Department (HOD), you oversee the academic operations of your department. You can monitor faculty workload, approve allocations, and generate comprehensive department reports.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-green-300 mb-2">🏢 Department Oversight</h4>
                  <p className="text-sm text-gray-300">Monitor overall department performance and operations</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">👨‍🏫 Faculty Management</h4>
                  <p className="text-sm text-gray-300">Manage faculty assignments and workload distribution</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-300 mb-2">📊 Reports & Analytics</h4>
                  <p className="text-sm text-gray-300">Generate comprehensive department reports</p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">HOD Quick Start Guide</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong>Review Department Status:</strong> Check current faculty workload and course coverage</li>
                <li><strong>Monitor Faculty:</strong> Review faculty assignments and performance</li>
                <li><strong>Approve Allocations:</strong> Review and approve course and room allocations</li>
                <li><strong>Generate Reports:</strong> Create department performance reports</li>
                <li><strong>Address Issues:</strong> Resolve faculty conflicts and workload imbalances</li>
                <li><strong>Plan Ahead:</strong> Review upcoming semester requirements</li>
              </ol>
            </div>
          </div>
        );

      case 'department-oversight':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4">Department Oversight Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Department Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">📚 Academic Programs</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>UG Program (8 semesters)</li>
                        <li>PG Program (4 semesters)</li>
                        <li>Course offerings</li>
                        <li>Curriculum compliance</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">👥 Faculty Overview</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Total faculty count</li>
                        <li>Role distribution</li>
                        <li>Specialization areas</li>
                        <li>Performance metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Operational Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Course Coverage:</strong> Ensure all courses are properly assigned</li>
                    <li><strong>Faculty Utilization:</strong> Monitor faculty workload distribution</li>
                    <li><strong>Resource Allocation:</strong> Track classroom and lab usage</li>
                    <li><strong>Quality Assurance:</strong> Maintain academic standards</li>
                    <li><strong>Compliance Monitoring:</strong> Ensure regulatory compliance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-200 mb-2">Performance Indicators</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Teaching Load:</strong> Average teaching hours per faculty</li>
                    <li><strong>Course Completion:</strong> Percentage of courses with assigned faculty</li>
                    <li><strong>Resource Utilization:</strong> Classroom and lab usage efficiency</li>
                    <li><strong>Faculty Satisfaction:</strong> Workload distribution satisfaction</li>
                    <li><strong>Student Feedback:</strong> Course and faculty ratings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'faculty-management':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4">Faculty Management Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Faculty Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">👨‍🏫 Faculty Profiles</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Personal information</li>
                        <li>Qualifications</li>
                        <li>Specializations</li>
                        <li>Teaching experience</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-300 mb-2">📋 Current Assignments</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Course assignments</li>
                        <li>Role assignments</li>
                        <li>Workload distribution</li>
                        <li>Availability status</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Faculty Assignment Management</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Course Assignments:</strong> Assign faculty to specific courses</li>
                    <li><strong>Role Assignments:</strong> Assign Theory Teacher, Lab Incharge roles</li>
                    <li><strong>Workload Balancing:</strong> Ensure fair distribution of teaching load</li>
                    <li><strong>Specialization Matching:</strong> Match faculty expertise to courses</li>
                    <li><strong>Availability Consideration:</strong> Consider faculty preferences and constraints</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Performance Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Teaching Effectiveness:</strong> Monitor faculty performance metrics</li>
                    <li><strong>Workload Compliance:</strong> Ensure faculty meet teaching requirements</li>
                    <li><strong>Student Feedback:</strong> Review student evaluations</li>
                    <li><strong>Professional Development:</strong> Track training and development activities</li>
                    <li><strong>Research Activities:</strong> Monitor research contributions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-green-200 mb-2">Conflict Resolution</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Workload Conflicts:</strong> Resolve excessive workload issues</li>
                    <li><strong>Schedule Conflicts:</strong> Address timetable conflicts</li>
                    <li><strong>Role Conflicts:</strong> Resolve role assignment disputes</li>
                    <li><strong>Resource Conflicts:</strong> Address resource allocation issues</li>
                    <li><strong>Communication Issues:</strong> Facilitate faculty communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'workload-monitoring':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">Workload Monitoring Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Workload Overview</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📊 Teaching Load</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Theory hours per week</li>
                        <li>Lab hours per week</li>
                        <li>Total teaching hours</li>
                        <li>Course count</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">⚖️ Load Distribution</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Faculty-wise distribution</li>
                        <li>Semester-wise load</li>
                        <li>Role-wise workload</li>
                        <li>Balance indicators</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Workload Analysis</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Individual Faculty Load:</strong> Monitor each faculty's teaching hours</li>
                    <li><strong>Department Average:</strong> Compare individual loads to department average</li>
                    <li><strong>Semester Distribution:</strong> Analyze workload across semesters</li>
                    <li><strong>Role-based Analysis:</strong> Compare Theory Teacher vs Lab Incharge loads</li>
                    <li><strong>Trend Analysis:</strong> Track workload changes over time</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Load Balancing</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Identify Imbalances:</strong> Spot faculty with excessive or insufficient load</li>
                    <li><strong>Redistribution Planning:</strong> Plan workload redistribution</li>
                    <li><strong>Faculty Consultation:</strong> Discuss workload adjustments with faculty</li>
                    <li><strong>Implementation:</strong> Execute workload balancing changes</li>
                    <li><strong>Monitoring:</strong> Track the effectiveness of changes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Compliance Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Minimum Load Requirements:</strong> Ensure faculty meet minimum teaching hours</li>
                    <li><strong>Maximum Load Limits:</strong> Prevent excessive workload</li>
                    <li><strong>Role Requirements:</strong> Ensure proper role assignments</li>
                    <li><strong>Semester Coverage:</strong> Verify all semesters are properly covered</li>
                    <li><strong>Quality Standards:</strong> Maintain teaching quality standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'allocation-approval':
        return (
          <div className="space-y-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-orange-300 mb-4">Allocation Approval Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Approval Process</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📋 Course Allocations</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Faculty-course assignments</li>
                        <li>Role assignments</li>
                        <li>Workload verification</li>
                        <li>Expertise matching</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">🏢 Room Allocations</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Classroom assignments</li>
                        <li>Lab floor assignments</li>
                        <li>Capacity verification</li>
                        <li>Equipment requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Approval Criteria</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Faculty Qualifications:</strong> Ensure faculty meet course requirements</li>
                    <li><strong>Workload Balance:</strong> Verify fair distribution of teaching load</li>
                    <li><strong>Resource Availability:</strong> Confirm adequate classroom and lab resources</li>
                    <li><strong>Schedule Conflicts:</strong> Check for timetable conflicts</li>
                    <li><strong>Quality Standards:</strong> Maintain academic quality standards</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Review Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Initial Review:</strong> Review proposed allocations</li>
                    <li><strong>Criteria Check:</strong> Verify against approval criteria</li>
                    <li><strong>Stakeholder Consultation:</strong> Consult with relevant faculty</li>
                    <li><strong>Decision Making:</strong> Approve, reject, or request modifications</li>
                    <li><strong>Implementation:</strong> Execute approved allocations</li>
                    <li><strong>Monitoring:</strong> Track implementation effectiveness</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-200 mb-2">Conflict Resolution</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Workload Conflicts:</strong> Resolve excessive workload issues</li>
                    <li><strong>Resource Conflicts:</strong> Address resource allocation disputes</li>
                    <li><strong>Schedule Conflicts:</strong> Resolve timetable conflicts</li>
                    <li><strong>Role Conflicts:</strong> Address role assignment disputes</li>
                    <li><strong>Faculty Preferences:</strong> Consider faculty preferences and constraints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4">Department Reports Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Report Types</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-300 mb-2">📊 Academic Reports</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Course coverage reports</li>
                        <li>Faculty workload reports</li>
                        <li>Semester-wise analysis</li>
                        <li>Curriculum compliance</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-semibold text-green-300 mb-2">👥 Faculty Reports</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                        <li>Individual faculty reports</li>
                        <li>Performance metrics</li>
                        <li>Workload distribution</li>
                        <li>Role assignments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Operational Reports</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Resource Utilization:</strong> Classroom and lab usage reports</li>
                    <li><strong>Allocation Status:</strong> Course and room allocation reports</li>
                    <li><strong>Conflict Analysis:</strong> Schedule and workload conflict reports</li>
                    <li><strong>Compliance Reports:</strong> Regulatory and policy compliance</li>
                    <li><strong>Trend Analysis:</strong> Historical data and trend reports</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Report Generation</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Select Report Type:</strong> Choose appropriate report category</li>
                    <li><strong>Set Parameters:</strong> Define date ranges and filters</li>
                    <li><strong>Generate Report:</strong> Execute report generation</li>
                    <li><strong>Review Data:</strong> Verify accuracy and completeness</li>
                    <li><strong>Export/Share:</strong> Download or share reports</li>
                    <li><strong>Action Planning:</strong> Plan actions based on report findings</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-2">Report Analysis</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Data Interpretation:</strong> Understand report data and metrics</li>
                    <li><strong>Trend Identification:</strong> Identify patterns and trends</li>
                    <li><strong>Issue Detection:</strong> Spot problems and areas for improvement</li>
                    <li><strong>Performance Assessment:</strong> Evaluate department performance</li>
                    <li><strong>Strategic Planning:</strong> Use reports for strategic decision making</li>
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
              <h3 className="text-xl font-bold text-yellow-300 mb-4">HOD Troubleshooting Guide</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Common HOD Issues</h4>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Faculty workload imbalance</h5>
                      <p className="text-sm text-gray-300">Solution: Review workload distribution and redistribute courses</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Course coverage gaps</h5>
                      <p className="text-sm text-gray-300">Solution: Identify unassigned courses and assign appropriate faculty</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h5 className="font-semibold text-red-300 mb-1">Problem: Resource allocation conflicts</h5>
                      <p className="text-sm text-gray-300">Solution: Review room assignments and resolve conflicts</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Conflict Resolution</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Faculty Disputes:</strong> Mediate faculty disagreements professionally</li>
                    <li><strong>Workload Conflicts:</strong> Balance workload fairly among faculty</li>
                    <li><strong>Resource Conflicts:</strong> Resolve classroom and lab conflicts</li>
                    <li><strong>Schedule Conflicts:</strong> Address timetable conflicts</li>
                    <li><strong>Role Conflicts:</strong> Clarify role assignments and responsibilities</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Communication Strategies</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Meetings:</strong> Schedule regular department meetings</li>
                    <li><strong>Open Communication:</strong> Maintain open communication channels</li>
                    <li><strong>Feedback Collection:</strong> Collect faculty feedback regularly</li>
                    <li><strong>Transparency:</strong> Be transparent about decisions and policies</li>
                    <li><strong>Documentation:</strong> Document important decisions and communications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li><strong>Regular Monitoring:</strong> Monitor department operations regularly</li>
                    <li><strong>Proactive Management:</strong> Address issues before they escalate</li>
                    <li><strong>Fair Treatment:</strong> Treat all faculty fairly and consistently</li>
                    <li><strong>Professional Development:</strong> Support faculty development</li>
                    <li><strong>Quality Assurance:</strong> Maintain high academic standards</li>
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
          <h1 className="text-4xl font-bold text-white mb-4">🎯 HOD Guide - Department Management</h1>
          <p className="text-gray-300 text-lg">Complete guide to managing your department effectively</p>
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
                    ? 'bg-blue-600 text-white shadow-lg'
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

        {/* Back to HOD Button */}
        <div className="text-center mt-8">
          <Link
            to="/hod-dashboard"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to HOD Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HODGuideMe; 