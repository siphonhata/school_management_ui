import React, { useState } from 'react';
import { 
  CheckIcon, 
  XMarkIcon, 
  MagnifyingGlassIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline';

interface Teacher {
  id: string;
  name: string;
  department: string;
  status: 'present' | 'absent' | 'late';
  checkIn?: string;
  checkOut?: string;
}

interface AttendanceProps {
  selectedDate: Date;
}

export const TeacherAttendance: React.FC<AttendanceProps> = ({ selectedDate }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [teachers] = useState<Teacher[]>([
    {
      id: 'T001',
      name: 'Jane Smith',
      department: 'Science',
      status: 'present',
      checkIn: '8:00 AM',
      checkOut: '4:00 PM'
    },
    {
      id: 'T002',
      name: 'Mike Johnson',
      department: 'Mathematics',
      status: 'absent',
      checkIn: '-',
      checkOut: '-'
    }
  ]);

  const handleAttendanceChange = (teacherId: string, newStatus: 'present' | 'absent') => {
    // Handle attendance change logic here
    console.log(`Changed ${teacherId} status to ${newStatus}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Department Select */}
        <div className="flex-1">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-white"
          >
            <option value="all">All Departments</option>
            <option value="science">Science</option>
            <option value="math">Mathematics</option>
            <option value="english">English</option>
          </select>
        </div>
        
        {/* Search and Export */}
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teachers..."
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
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teacher Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check In
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Check Out
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    teacher.status === 'present' 
                      ? 'bg-green-100 text-green-800' 
                      : teacher.status === 'late'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.checkIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.checkOut}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => handleAttendanceChange(teacher.id, 'present')}
                    >
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    </button>
                    <button 
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => handleAttendanceChange(teacher.id, 'absent')}
                    >
                      <XMarkIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 rounded-lg">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Late</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Absent</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Total Teachers: {teachers.length}
        </div>
      </div>
    </div>
  );
};