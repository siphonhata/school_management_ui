import React, { useState } from 'react';
import {
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  PlusIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

interface Exam {
  id: string;
  name: string;
  type: 'midterm' | 'final' | 'unit' | 'practice';
  startDate: string;
  endDate: string;
  classes: string[];
  subjects: Subject[];
  status: 'upcoming' | 'ongoing' | 'completed' | 'grading';
  totalMarks: number;
  passingMarks: number;
}

interface Subject {
  id: string;
  name: string;
  examDate?: string;
  examTime?: string;
  duration: number;
  teacher: string;
  maxMarks: number;
}

export const ExamManagement: React.FC = () => {
  const [activeView, setActiveView] = useState<'schedule' | 'results' | 'settings'>('schedule');
  const [showAddExam, setShowAddExam] = useState(false);
  const [showScheduleDetails, setShowScheduleDetails] = useState(false);

  const [exams] = useState<Exam[]>([
    {
      id: 'MID1',
      name: 'Midterm Examination 2024',
      type: 'midterm',
      startDate: '2024-02-15',
      endDate: '2024-02-25',
      classes: ['10A', '10B', '10C'],
      subjects: [
        {
          id: 'PHY01',
          name: 'Physics',
          examDate: '2024-02-15',
          examTime: '09:00',
          duration: 180,
          teacher: 'Dr. Johnson',
          maxMarks: 100
        }
      ],
      status: 'completed',
      totalMarks: 500,
      passingMarks: 175
    }
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Exam Management</h1>
        <p className="text-gray-600">Schedule exams, manage results, and generate reports</p>
      </div>

      {/* Navigation */}
      <div className="mb-6 flex space-x-4">
        <button 
          onClick={() => setActiveView('schedule')}
          className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
            activeView === 'schedule' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600'
          }`}
        >
          <CalendarIcon className="h-5 w-5" />
          <span>Exam Schedule</span>
        </button>
        <button 
          onClick={() => setActiveView('results')}
          className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
            activeView === 'results' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600'
          }`}
        >
          <ChartBarIcon className="h-5 w-5" />
          <span>Results</span>
        </button>
        <button 
          onClick={() => setActiveView('settings')}
          className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
            activeView === 'settings' 
              ? 'bg-blue-100 text-blue-700' 
              : 'bg-white text-gray-600'
          }`}
        >
          <AcademicCapIcon className="h-5 w-5" />
          <span>Grade Settings</span>
        </button>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-md bg-white">
            <option value="">All Classes</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          <select className="px-4 py-2 border rounded-md bg-white">
            <option value="">All Exam Types</option>
            <option value="midterm">Midterm</option>
            <option value="final">Final</option>
            <option value="unit">Unit Test</option>
          </select>
        </div>
        <button
          onClick={() => setShowAddExam(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Schedule New Exam</span>
        </button>
      </div>

      {/* Exam List */}
      <div className="space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exam.name}</h3>
                  <div className="flex items-center mt-1 space-x-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      exam.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                      exam.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                      exam.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {exam.startDate} to {exam.endDate}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setShowScheduleDetails(true)}
                    className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md text-sm"
                  >
                    View Schedule
                  </button>
                  {exam.status === 'completed' && (
                    <button className="px-3 py-1 text-green-600 hover:bg-green-50 rounded-md text-sm">
                      View Results
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Classes</p>
                  <p className="mt-1 text-xl font-semibold">{exam.classes.length}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Subjects</p>
                  <p className="mt-1 text-xl font-semibold">{exam.subjects.length}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Total Marks</p>
                  <p className="mt-1 text-xl font-semibold">{exam.totalMarks}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Passing Marks</p>
                  <p className="mt-1 text-xl font-semibold">{exam.passingMarks}</p>
                </div>
              </div>

              {/* Subject Schedule Preview */}
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Subject Schedule</h4>
                <div className="space-y-2">
                  {exam.subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <DocumentTextIcon className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">{subject.name}</p>
                          <p className="text-sm text-gray-500">Teacher: {subject.teacher}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{subject.examDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ClockIcon className="h-4 w-4" />
                          <span>{subject.examTime} ({subject.duration} mins)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Exam Modal */}
      {showAddExam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Schedule New Examination</h2>
            <form className="space-y-4">
              {/* Basic Info */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Examination Name</label>
                <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Exam Type</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>Midterm Examination</option>
                    <option>Final Examination</option>
                    <option>Unit Test</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Classes</label>
                  <select multiple className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>Grade 10 - A</option>
                    <option>Grade 10 - B</option>
                    <option>Grade 10 - C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Start Date</label>
                  <input type="date" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">End Date</label>
                  <input type="date" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
              </div>

              {/* Subject Schedule */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Subject Schedule</h3>
                <div className="space-y-2">
                  <div className="p-4 border rounded-md">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                        <select className="mt-1 w-full px-4 py-2 border rounded-md">
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>Mathematics</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" className="mt-1 w-full px-4 py-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Time</label>
                        <input type="time" className="mt-1 w-full px-4 py-2 border rounded-md" />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border border-dashed rounded-md text-gray-600 hover:bg-gray-50"
                  >
                    + Add Another Subject
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddExam(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Schedule Examination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamManagement;