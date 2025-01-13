import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  BookOpenIcon,
  TrophyIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface Activity {
  type: 'attendance' | 'grade' | 'event';
  date: string;
  details: string;
}

interface StudentData {
  name: string;
  email: string;
  phone: string;
  address: string;
  class: string;
  rollNumber: string;
  admissionDate: string;
  attendance: number;
  performance: number;
  subjects: string[];
  recentActivities: Activity[];
}

interface StudentProfileProps {
  student?: StudentData;
}

const defaultStudent: StudentData = {
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 School Street, City, State 12345',
  class: '10A',
  rollNumber: '2021-001',
  admissionDate: '2021-09-01',
  attendance: 95,
  performance: 85,
  subjects: ['Mathematics', 'Science', 'English', 'History'],
  recentActivities: [
    { type: 'attendance', date: '2024-01-12', details: 'Marked present' },
    { type: 'grade', date: '2024-01-10', details: 'Scored 92% in Mathematics test' },
    { type: 'event', date: '2024-01-08', details: 'Participated in Science Fair' }
  ]
};

const StudentProfile: React.FC<StudentProfileProps> = ({ student = defaultStudent }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center">
          <img
            src="/api/placeholder/96/96"
            alt={student.name}
            className="h-24 w-24 rounded-full object-cover bg-gray-100"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">{student.name}</h2>
            <div className="mt-2 flex items-center text-gray-600">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              <span>Class {student.class}</span>
              <span className="mx-2">•</span>
              <span>Roll No: {student.rollNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <EnvelopeIcon className="w-5 h-5 mr-3" />
              <span>{student.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <PhoneIcon className="w-5 h-5 mr-3" />
              <span>{student.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPinIcon className="w-5 h-5 mr-3" />
              <span>{student.address}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="w-5 h-5 mr-3" />
              <span>Admitted: {student.admissionDate}</span>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Academic Performance</h3>
          <div className="space-y-4">
            {/* Attendance */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Attendance</span>
                <span className="text-sm font-medium text-gray-700">{student.attendance}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 rounded-full h-2 transition-all duration-300" 
                  style={{ width: `${student.attendance}%` }}
                ></div>
              </div>
            </div>

            {/* Performance */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Overall Performance</span>
                <span className="text-sm font-medium text-gray-700">{student.performance}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 rounded-full h-2 transition-all duration-300" 
                  style={{ width: `${student.performance}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Enrolled Subjects</h3>
          <div className="grid grid-cols-2 gap-3">
            {student.subjects.map((subject, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <TrophyIcon className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-700">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {student.recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  {activity.type === 'attendance' && (
                    <ClockIcon className="w-5 h-5 text-green-500" />
                  )}
                  {activity.type === 'grade' && (
                    <TrophyIcon className="w-5 h-5 text-blue-500" />
                  )}
                  {activity.type === 'event' && (
                    <ChartBarIcon className="w-5 h-5 text-purple-500" />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-900">{activity.details}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;