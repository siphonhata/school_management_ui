import React, { useState } from 'react';
import { 
  CheckIcon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline';

interface Student {
  id: string;
  rollNo: string;
  name: string;
  class: string;
  status: 'present' | 'absent' | 'late';
  time?: string;
}

interface AttendanceProps {
  selectedDate: Date;
}

export const StudentAttendance: React.FC<AttendanceProps> = ({ selectedDate }) => {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [students] = useState<Student[]>([
    {
      id: '1',
      rollNo: '001',
      name: 'John Doe',
      class: 'Class 1',
      status: 'present',
      time: '8:30 AM'
    },
    {
      id: '2',
      rollNo: '002',
      name: 'Jane Smith',
      class: 'Class 1',
      status: 'absent',
      time: '-'
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Class Select */}
        <div className="flex-1">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white"
          >
            <option value="all">All Classes</option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
          </select>
        </div>
        
        {/* Search and Export */}
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <button className="p-2 border rounded-md hover:bg-gray-50">
            <ArrowDownTrayIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Roll No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.rollNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.class}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    student.status === 'present' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {student.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <XMarkIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};