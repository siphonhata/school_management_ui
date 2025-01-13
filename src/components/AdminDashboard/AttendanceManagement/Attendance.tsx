import React, { useState } from 'react';

import { 
  UsersIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';
import { StudentAttendance } from './StudentAttendance';
import { TeacherAttendance } from './TeacherAttendance';

interface TabProps {
  active: string;
  onChange: (tab: string) => void;
}

const Tabs: React.FC<TabProps> = ({ active, onChange }) => (
  <div className="flex space-x-1 border-b">
    <button
      onClick={() => onChange('students')}
      className={`px-4 py-2 -mb-px ${
        active === 'students'
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-600'
      }`}
    >
      Students
    </button>
    <button
      onClick={() => onChange('teachers')}
      className={`px-4 py-2 -mb-px ${
        active === 'teachers'
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-600'
      }`}
    >
      Teachers
    </button>
    <button
      onClick={() => onChange('stats')}
      className={`px-4 py-2 -mb-px ${
        active === 'stats'
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-600'
      }`}
    >
      Statistics
    </button>
  </div>
);

const AttendanceDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<string>('students');
  const summary = {
    totalStudents: 1000,
    presentStudents: 892,
    totalTeachers: 100,
    presentTeachers: 98,
    averageAttendance: 89.2,
    pendingLeaves: 15
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-600">Total Present Today</h3>
            <UsersIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-900">
              {summary.presentStudents}/{summary.totalStudents}
            </div>
            <p className="text-sm text-gray-500">Students</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-600">Staff Attendance</h3>
            <UserGroupIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-900">
              {summary.presentTeachers}/{summary.totalTeachers}
            </div>
            <p className="text-sm text-gray-500">Teachers</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-600">Average Attendance</h3>
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-900">{summary.averageAttendance}%</div>
            <p className="text-sm text-gray-500">This month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-600">Leave Requests</h3>
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-900">{summary.pendingLeaves}</div>
            <p className="text-sm text-gray-500">Pending approval</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <Tabs active={activeTab} onChange={setActiveTab} />
        </div>
        <div className="p-4">
          {activeTab === 'students' && <StudentAttendance selectedDate={selectedDate} />}
          {activeTab === 'teachers' && <TeacherAttendance selectedDate={selectedDate} />}
          {activeTab === 'stats' && <div>Statistics Content</div>}
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;