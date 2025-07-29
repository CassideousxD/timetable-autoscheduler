import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GuideMe = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', title: 'Overview', icon: '📋' },
        { id: 'ug-scheduling', title: 'UG Scheduling', icon: '🎓' },
        { id: 'pg-scheduling', title: 'PG Scheduling', icon: '🎯' },
        { id: 'lab-management', title: 'Lab Management', icon: '🔬' },
        { id: 'faculty-assignment', title: 'Faculty Assignment', icon: '👨‍🏫' },
        { id: 'constraints', title: 'Constraints & Rules', icon: '⚖️' },
        { id: 'export-import', title: 'Export & Import', icon: '📤' },
        { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Welcome to Timetable Management System</h3>
                            <p className="text-gray-300 mb-4">
                                This system helps you create, manage, and optimize timetables for both Undergraduate (UG) and Postgraduate (PG) programs.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-green-300 mb-2">🎓 UG Management</h4>
                                    <p className="text-sm text-gray-300">Schedule theory and lab sessions for undergraduate students</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-purple-300 mb-2">🎯 PG Management</h4>
                                    <p className="text-sm text-gray-300">Handle separate theory and lab faculty for postgraduate programs</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-orange-300 mb-2">🔬 Lab Management</h4>
                                    <p className="text-sm text-gray-300">Manage lab floor assignments and prevent conflicts</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">Quick Start Guide</h3>
                            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                <li><strong>Select Student Type:</strong> Choose between UG or PG based on your needs</li>
                                <li><strong>Choose Semester:</strong> Select the semester you want to schedule</li>
                                <li><strong>Auto-Schedule:</strong> Use the auto-scheduler for quick timetable generation</li>
                                <li><strong>Manual Adjustments:</strong> Fine-tune the schedule by clicking on time slots</li>
                                <li><strong>Lab Assignment:</strong> Assign labs to appropriate floors</li>
                                <li><strong>Save & Export:</strong> Save your timetable and export as needed</li>
                            </ol>
                        </div>
                    </div>
                );

            case 'ug-scheduling':
                return (
                    <div className="space-y-6">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">UG (Undergraduate) Scheduling Guide</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Step 1: Initial Setup</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Select "UG" as student type</li>
                                        <li>Choose semester (1-8)</li>
                                        <li>Select batch (N, P, Q)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Step 2: Auto-Scheduling</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Click "Auto Schedule" button</li>
                                        <li>System will automatically assign courses based on faculty availability</li>
                                        <li>Review the generated timetable</li>
                                        <li>Check for any unscheduled courses in console</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Step 3: Manual Adjustments</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Click on any time slot to modify</li>
                                        <li>Select course from the dropdown</li>
                                        <li>For Lab Integrated Theory courses, choose Theory or Lab</li>
                                        <li>System will automatically assign appropriate faculty</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Step 4: Lab Management</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Go to Lab Schedule Preview section</li>
                                        <li>Lab floor will auto-select based on batch (N=Ground, P=Second, Q=Third)</li>
                                        <li>Click on lab slots to assign lab courses</li>
                                        <li>Use "Auto Schedule Labs" for automatic lab assignment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">UG Batch Floor Assignments</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white/5 rounded-lg p-4 text-center">
                                    <h4 className="font-semibold text-blue-300 mb-2">Batch N</h4>
                                    <p className="text-2xl font-bold text-blue-400">Ground Floor</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 text-center">
                                    <h4 className="font-semibold text-green-300 mb-2">Batch P</h4>
                                    <p className="text-2xl font-bold text-green-400">Second Floor</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4 text-center">
                                    <h4 className="font-semibold text-purple-300 mb-2">Batch Q</h4>
                                    <p className="text-2xl font-bold text-purple-400">Third Floor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'pg-scheduling':
                return (
                    <div className="space-y-6">
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-purple-300 mb-4">PG (Postgraduate) Scheduling Guide</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-purple-200 mb-2">Key Differences from UG</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Separate Faculty:</strong> Theory and Lab sessions have different faculty members</li>
                                        <li><strong>Lab Floor:</strong> All PG labs are assigned to First Floor</li>
                                        <li><strong>Faculty Roles:</strong> Theory Teacher vs Lab Incharge</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-purple-200 mb-2">Step 1: Initial Setup</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Select "PG" as student type</li>
                                        <li>Choose semester (1-4)</li>
                                        <li>System will automatically select PG Batch</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-purple-200 mb-2">Step 2: Auto-Scheduling</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Click "Auto Schedule" button</li>
                                        <li>System will assign Theory Teacher for theory sessions</li>
                                        <li>System will assign Lab Incharge for lab sessions</li>
                                        <li>Check console for any faculty assignment issues</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-purple-200 mb-2">Step 3: Faculty Assignment Verification</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Go to "Detailed Analysis" tab to verify faculty assignments</li>
                                        <li>Ensure Theory Teacher and Lab Incharge are properly mapped</li>
                                        <li>Check that faculty assignments match the timetable</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-purple-200 mb-2">Step 4: Lab Management</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Lab preview will automatically show First Floor</li>
                                        <li>PG labs will appear in green color</li>
                                        <li>UG labs (if any) will appear in orange color</li>
                                        <li>Use lab preview to verify lab assignments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">PG Faculty Assignment Structure</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-green-300 mb-2">Theory Sessions</h4>
                                    <p className="text-sm text-gray-300">Assigned to "Theory Teacher" role</p>
                                    <p className="text-xs text-gray-400 mt-1">Example: Dr. John Smith (Theory Teacher)</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-orange-300 mb-2">Lab Sessions</h4>
                                    <p className="text-sm text-gray-300">Assigned to "Lab Incharge" role</p>
                                    <p className="text-xs text-gray-400 mt-1">Example: Dr. John Smith (Lab Incharge)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'lab-management':
                return (
                    <div className="space-y-6">
                        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-orange-300 mb-4">Lab Management Guide</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-orange-200 mb-2">Lab Floor Overview</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <h5 className="font-semibold text-blue-300">Ground Floor</h5>
                                            <p className="text-xs text-gray-300">Batch N</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <h5 className="font-semibold text-green-300">First Floor</h5>
                                            <p className="text-xs text-gray-300">PG Batch</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <h5 className="font-semibold text-purple-300">Second Floor</h5>
                                            <p className="text-xs text-gray-300">Batch P</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3 text-center">
                                            <h5 className="font-semibold text-yellow-300">Third Floor</h5>
                                            <p className="text-xs text-gray-300">Batch Q</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-orange-200 mb-2">Lab Preview Table Features</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Color Coding:</strong> Green for PG labs, Orange for UG labs</li>
                                        <li><strong>Floor Selection:</strong> Dropdown to switch between floors</li>
                                        <li><strong>Auto Floor Selection:</strong> Automatically selects correct floor based on batch</li>
                                        <li><strong>Cross-Reference:</strong> Shows labs from both UG and PG on same floor</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-orange-200 mb-2">Lab Assignment Process</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Click on empty lab slot in the preview table</li>
                                        <li>Select lab course from the dropdown</li>
                                        <li>Choose appropriate batch if prompted</li>
                                        <li>System will assign to correct floor automatically</li>
                                        <li>Use "Auto Schedule Labs" for bulk assignment</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-orange-200 mb-2">Lab Schedule Summary</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Shows utilization percentage for each floor</li>
                                        <li>Displays preferred batches for each floor</li>
                                        <li>Shows breakdown of UG vs PG slots</li>
                                        <li>Helps identify floor capacity issues</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-red-300 mb-4">Lab Conflict Prevention</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li><strong>Floor Collision Detection:</strong> System prevents multiple batches using same floor simultaneously</li>
                                <li><strong>Faculty Conflict Check:</strong> Ensures faculty isn't teaching multiple classes at same time</li>
                                <li><strong>Batch-Specific Floors:</strong> Each batch is assigned to specific floor to prevent overlap</li>
                                <li><strong>Real-time Validation:</strong> Immediate feedback when conflicts are detected</li>
                            </ul>
                        </div>
                    </div>
                );

            case 'faculty-assignment':
                return (
                    <div className="space-y-6">
                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Faculty Assignment Guide</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-2">Faculty Assignment Structure</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-lg p-4">
                                            <h5 className="font-semibold text-green-300 mb-2">UG Faculty Assignment</h5>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                                <li>Same faculty for theory and lab</li>
                                                <li>Multiple roles: Theory Teacher, Lab Incharge, Lab Assistant</li>
                                                <li>Automatic assignment based on availability</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-4">
                                            <h5 className="font-semibold text-purple-300 mb-2">PG Faculty Assignment</h5>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                                <li>Different faculty for theory and lab</li>
                                                <li>Theory Teacher for theory sessions</li>
                                                <li>Lab Incharge for lab sessions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-2">Faculty Assignment Process</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Go to "Detailed Analysis" tab</li>
                                        <li>Click "Populate Assignments" to create faculty mappings</li>
                                        <li>Verify faculty assignments for each course</li>
                                        <li>Check that roles are correctly assigned</li>
                                        <li>Run auto-scheduler to apply assignments</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-2">Faculty Availability Constraints</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>No Double Booking:</strong> Faculty can't teach multiple classes simultaneously</li>
                                        <li><strong>Free Day Rule:</strong> Faculty must have at least one free day per week</li>
                                        <li><strong>First Hour Limit:</strong> Faculty can't teach more than 2 first-hour sessions</li>
                                        <li><strong>Consecutive Classes:</strong> System prevents back-to-back classes for same faculty</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-blue-200 mb-2">Troubleshooting Faculty Issues</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>No Faculty Mapped:</strong> Check Detailed Analysis tab for missing assignments</li>
                                        <li><strong>Faculty Conflicts:</strong> Review faculty timetable for overlapping assignments</li>
                                        <li><strong>Role Mismatch:</strong> Ensure correct roles (Theory Teacher vs Lab Incharge)</li>
                                        <li><strong>Availability Issues:</strong> Check faculty constraints and free day requirements</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'constraints':
                return (
                    <div className="space-y-6">
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-yellow-300 mb-4">Scheduling Constraints & Rules</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-yellow-200 mb-2">Time Slot Constraints</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Lunch Break:</strong> 12:15 PM - 1:10 PM (no classes scheduled)</li>
                                        <li><strong>Lab Blocks:</strong> Lab sessions must be consecutive (2-4 hours)</li>
                                        <li><strong>Theory Limits:</strong> Maximum 2 theory hours per day for same course</li>
                                        <li><strong>Lab Limits:</strong> Maximum 4 lab hours per day for same course</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-yellow-200 mb-2">Faculty Constraints</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>No Double Booking:</strong> Faculty can't teach multiple classes at same time</li>
                                        <li><strong>Free Day Rule:</strong> Each faculty must have at least one free day per week</li>
                                        <li><strong>First Hour Limit:</strong> Faculty can't teach more than 2 first-hour sessions</li>
                                        <li><strong>Lab-Theory Day:</strong> On lab days, only one theory session allowed per faculty</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-yellow-200 mb-2">Lab Floor Constraints</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Floor Assignment:</strong> Each batch has specific floor assignment</li>
                                        <li><strong>No Floor Conflicts:</strong> Multiple batches can't use same floor simultaneously</li>
                                        <li><strong>PG Floor:</strong> All PG labs must be on First Floor</li>
                                        <li><strong>UG Floors:</strong> N=Ground, P=Second, Q=Third</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-yellow-200 mb-2">Course-Specific Constraints</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Lab Integrated Theory:</strong> Can be scheduled as theory or lab</li>
                                        <li><strong>Credits Mapping:</strong> Course credits determine number of hours</li>
                                        <li><strong>Category Rules:</strong> Theory, Lab, and Lab Integrated Theory have different rules</li>
                                        <li><strong>Semester Limits:</strong> Courses can only be scheduled in their designated semester</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">Constraint Management</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-green-200 mb-2">Automatic Validation</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Real-time constraint checking</li>
                                        <li>Immediate feedback on violations</li>
                                        <li>Automatic conflict resolution suggestions</li>
                                        <li>Visual indicators for constraint violations</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-green-200 mb-2">Manual Override</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Override constraints when necessary</li>
                                        <li>Manual conflict resolution</li>
                                        <li>Custom scheduling for special cases</li>
                                        <li>Flexible constraint management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'export-import':
                return (
                    <div className="space-y-6">
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-300 mb-4">Export & Import Guide</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Export Options</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-lg p-4">
                                            <h5 className="font-semibold text-blue-300 mb-2">Excel Export</h5>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                                <li>Export timetable as Excel file</li>
                                                <li>Includes course names and faculty</li>
                                                <li>Easy to edit and share</li>
                                                <li>Available for both UG and PG</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-4">
                                            <h5 className="font-semibold text-purple-300 mb-2">PDF Export</h5>
                                            <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                                <li>Professional PDF format</li>
                                                <li>Includes course details and faculty</li>
                                                <li>Lab floor information included</li>
                                                <li>Ready for printing and distribution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Export Process</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Generate or load your timetable</li>
                                        <li>Click "Export Excel" or "Export PDF" button</li>
                                        <li>Select batch if prompted</li>
                                        <li>File will download automatically</li>
                                        <li>Check downloaded file for accuracy</li>
                                    </ol>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Lab Schedule Export</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Lab Excel Export:</strong> Export lab schedule for all floors</li>
                                        <li><strong>Floor-wise Export:</strong> Export specific floor lab schedule</li>
                                        <li><strong>Batch-wise Export:</strong> Export lab schedule for specific batch</li>
                                        <li><strong>Comprehensive Export:</strong> Include all lab assignments and conflicts</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-green-200 mb-2">Data Management</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Save Timetable:</strong> Save current timetable to database</li>
                                        <li><strong>Load Timetable:</strong> Load previously saved timetables</li>
                                        <li><strong>Update Timetable:</strong> Modify existing timetables</li>
                                        <li><strong>Delete Timetable:</strong> Remove unwanted timetables</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'troubleshooting':
                return (
                    <div className="space-y-6">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-red-300 mb-4">Common Issues & Solutions</h3>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-red-200 mb-2">Auto-Scheduling Issues</h4>
                                    <div className="space-y-2">
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: "No faculty mapped" errors</h5>
                                            <p className="text-sm text-gray-300">Solution: Go to Detailed Analysis tab and click "Populate Assignments"</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Many unscheduled courses</h5>
                                            <p className="text-sm text-gray-300">Solution: Check faculty availability and constraints, adjust manually</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: PG labs not scheduling</h5>
                                            <p className="text-sm text-gray-300">Solution: Verify Theory Teacher and Lab Incharge assignments in Detailed Analysis</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-red-200 mb-2">Lab Management Issues</h4>
                                    <div className="space-y-2">
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: PG labs appearing on wrong floor</h5>
                                            <p className="text-sm text-gray-300">Solution: Check lab schedule assignments, PG labs should only be on First Floor</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Lab conflicts not detected</h5>
                                            <p className="text-sm text-gray-300">Solution: Use lab preview table to manually check for conflicts</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Lab floor not auto-selecting</h5>
                                            <p className="text-sm text-gray-300">Solution: Ensure you have selected the correct batch and student type</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-red-200 mb-2">Faculty Assignment Issues</h4>
                                    <div className="space-y-2">
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Faculty teaching multiple classes simultaneously</h5>
                                            <p className="text-sm text-gray-300">Solution: Check faculty timetable and resolve conflicts manually</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Wrong faculty assigned</h5>
                                            <p className="text-sm text-gray-300">Solution: Update faculty assignments in Detailed Analysis tab</p>
                                        </div>
                                        <div className="bg-white/5 rounded-lg p-3">
                                            <h5 className="font-semibold text-yellow-300 mb-1">Problem: Faculty has no free day</h5>
                                            <p className="text-sm text-gray-300">Solution: Redistribute classes to ensure faculty has at least one free day</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-red-200 mb-2">General Tips</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li><strong>Check Console:</strong> Always check browser console for error messages</li>
                                        <li><strong>Save Frequently:</strong> Save your work regularly to avoid data loss</li>
                                        <li><strong>Start Small:</strong> Begin with auto-scheduling, then make manual adjustments</li>
                                        <li><strong>Verify Constraints:</strong> Ensure all scheduling constraints are satisfied</li>
                                        <li><strong>Test Export:</strong> Always test export functionality before finalizing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-blue-300 mb-4">Getting Help</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-200 mb-2">System Features</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Real-time validation</li>
                                        <li>Automatic conflict detection</li>
                                        <li>Visual feedback for issues</li>
                                        <li>Comprehensive error logging</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 rounded-lg p-4">
                                    <h4 className="font-semibold text-blue-200 mb-2">Best Practices</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                                        <li>Plan your schedule before starting</li>
                                        <li>Use auto-scheduling as starting point</li>
                                        <li>Review and adjust manually</li>
                                        <li>Test thoroughly before finalizing</li>
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
                    <h1 className="text-4xl font-bold text-white mb-4">📚 Guide Me - Timetable Management System</h1>
                    <p className="text-gray-300 text-lg">Complete guide to using the timetable management system for both UG and PG programs</p>
                </div>

                {/* Navigation */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
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

                {/* Back to Timetable Button */}
                <div className="text-center mt-8">
                    <Link
                        to="/timetable-builder"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Timetable Builder
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GuideMe; 