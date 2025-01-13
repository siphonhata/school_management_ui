import React, { useState } from 'react';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface TimeSlot {
  id: string;
  subject: string;
  teacher: string;
  room: string;
  startTime: string;
  endTime: string;
}

interface DaySchedule {
  [key: string]: TimeSlot[];
}

export const TimetableManagement: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('10A');
  const [selectedTeacher, setSelectedTeacher] = useState<string>('all');
  const [showAddSlot, setShowAddSlot] = useState(false);

  // Sample data
  const timeSlots: DaySchedule = {
    Monday: [
      {
        id: '1',
        subject: 'Mathematics',
        teacher: 'John Smith',
        room: 'Room 101',
        startTime: '08:00',
        endTime: '09:00'
      },
      {
        id: '2',
        subject: 'Physics',
        teacher: 'Sarah Johnson',
        room: 'Lab 1',
        startTime: '09:00',
        endTime: '10:00'
      }
    ],
    Tuesday: [
      {
        id: '3',
        subject: 'Chemistry',
        teacher: 'Mike Brown',
        room: 'Lab 2',
        startTime: '08:00',
        endTime: '09:00'
      }
    ]
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['8:00 - 9:00', '9:00 - 10:00', '10:20 - 11:20', '11:20 - 12:20', '1:00 - 2:00', '2:00 - 3:00'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Timetable Management</h1>
        <button
          onClick={() => setShowAddSlot(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Time Slot</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="10A">Class 10-A</option>
          <option value="10B">Class 10-B</option>
          <option value="10C">Class 10-C</option>
        </select>

        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          <option value="all">All Teachers</option>
          <option value="1">John Smith</option>
          <option value="2">Sarah Johnson</option>
        </select>
      </div>

      {/* Week Navigation */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold">Current Week (Oct 9 - Oct 13)</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-4 px-6 border-b text-left font-medium text-gray-500">Time</th>
              {days.map((day) => (
                <th key={day} className="py-4 px-6 border-b text-left font-medium text-gray-500">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period, index) => (
              <tr key={period} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-6 border-b">
                  <div className="text-sm font-medium text-gray-900">{period}</div>
                </td>
                {days.map((day) => (
                  <td key={`${day}-${period}`} className="py-3 px-6 border-b">
                    {timeSlots[day]?.find(
                      slot => `${slot.startTime} - ${slot.endTime}` === period
                    ) ? (
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <div className="font-medium text-blue-900">
                          {timeSlots[day].find(
                            slot => `${slot.startTime} - ${slot.endTime}` === period
                          )?.subject}
                        </div>
                        <div className="text-sm text-blue-700">
                          {timeSlots[day].find(
                            slot => `${slot.startTime} - ${slot.endTime}` === period
                          )?.teacher}
                        </div>
                        <div className="text-xs text-blue-600">
                          {timeSlots[day].find(
                            slot => `${slot.startTime} - ${slot.endTime}` === period
                          )?.room}
                        </div>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setShowAddSlot(true)}
                        className="w-full h-full flex items-center justify-center text-gray-400 hover:text-blue-600"
                      >
                        <PlusIcon className="h-5 w-5" />
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Time Slot Modal */}
      {showAddSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add Time Slot</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teacher</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>John Smith</option>
                    <option>Sarah Johnson</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Day</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    {days.map(day => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Time</label>
                  <input type="time" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Time</label>
                  <input type="time" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Room</label>
                <select className="mt-1 w-full px-4 py-2 border rounded-md">
                  <option>Room 101</option>
                  <option>Lab 1</option>
                  <option>Lab 2</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddSlot(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimetableManagement;