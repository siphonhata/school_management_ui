import React, { useState } from 'react';
import {
  AcademicCapIcon,
  UserGroupIcon,
  BookOpenIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  ClockIcon,
  BeakerIcon,
  CalculatorIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

interface Teacher {
  id: string;
  name: string;
  department: string;
  specialization: string[];
}

interface Subject {
  id: string;
  name: string;
  code: string;
  teacherId?: string;
}

interface Stream {
  id: string;
  name: string;
  subjects: Subject[];
}

interface Class {
  id: string;
  name: string;
  grade: string;
  stream: Stream;
  headTeacher?: Teacher;
  totalStudents: number;
}

export const ClassManagement: React.FC = () => {
  const [showAddClass, setShowAddClass] = useState(false);
  const [showAssignTeacher, setShowAssignTeacher] = useState(false);
  const [showManageSubjects, setShowManageSubjects] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const [classes] = useState<Class[]>([
    {
      id: '10A',
      name: '10 A',
      grade: '10',
      stream: {
        id: 'science',
        name: 'Science',
        subjects: [
          { id: 'PHY01', name: 'Physics', code: 'PHY10' },
          { id: 'CHEM01', name: 'Chemistry', code: 'CHEM10' },
          { id: 'BIO01', name: 'Biology', code: 'BIO10' },
          { id: 'MATH01', name: 'Mathematics', code: 'MATH10' }
        ]
      },
      headTeacher: {
        id: 'T1',
        name: 'John Smith',
        department: 'Science',
        specialization: ['Physics', 'Mathematics']
      },
      totalStudents: 30
    }
  ]);

  const [availableTeachers] = useState<Teacher[]>([
    {
      id: 'T1',
      name: 'John Smith',
      department: 'Science',
      specialization: ['Physics', 'Mathematics']
    },
    {
      id: 'T2',
      name: 'Sarah Johnson',
      department: 'Science',
      specialization: ['Biology', 'Chemistry']
    }
  ]);

  const [streams] = useState<Stream[]>([
    {
      id: 'science',
      name: 'Science',
      subjects: [
        { id: 'PHY01', name: 'Physics', code: 'PHY10' },
        { id: 'CHEM01', name: 'Chemistry', code: 'CHEM10' },
        { id: 'BIO01', name: 'Biology', code: 'BIO10' },
        { id: 'MATH01', name: 'Mathematics', code: 'MATH10' }
      ]
    },
    {
      id: 'commerce',
      name: 'Commerce',
      subjects: [
        { id: 'ACC01', name: 'Accountancy', code: 'ACC10' },
        { id: 'BST01', name: 'Business Studies', code: 'BST10' },
        { id: 'ECO01', name: 'Economics', code: 'ECO10' }
      ]
    }
  ]);

  const getStreamIcon = (streamName: string) => {
    switch (streamName.toLowerCase()) {
      case 'science':
        return <BeakerIcon className="h-5 w-5 text-green-500" />;
      case 'commerce':
        return <CalculatorIcon className="h-5 w-5 text-blue-500" />;
      default:
        return <AcademicCapIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Class Management</h1>
        <p className="text-gray-600">Manage class sections, streams, and teachers</p>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-md bg-white">
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          <select className="px-4 py-2 border rounded-md bg-white">
            <option value="">All Streams</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
          </select>
        </div>
        <button
          onClick={() => setShowAddClass(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add New Class</span>
        </button>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              {/* Class Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{classItem.name}</h3>
                  <div className="flex items-center mt-1">
                    {getStreamIcon(classItem.stream.name)}
                    <span className="ml-1 text-sm text-gray-600">{classItem.stream.name} Stream</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-md">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-md">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Class Info */}
              <div className="space-y-4">
                {/* Head Teacher */}
                <div className="flex items-start space-x-3">
                  <UserIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Head Teacher</p>
                    {classItem.headTeacher ? (
                      <p className="text-sm font-medium text-gray-900">{classItem.headTeacher.name}</p>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedClass(classItem);
                          setShowAssignTeacher(true);
                        }}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        + Assign Head Teacher
                      </button>
                    )}
                  </div>
                </div>

                {/* Subjects */}
                <div className="flex items-start space-x-3">
                  <BookOpenIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Subjects</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {classItem.stream.subjects.slice(0, 3).map((subject) => (
                        <span
                          key={subject.id}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          {subject.name}
                        </span>
                      ))}
                      {classItem.stream.subjects.length > 3 && (
                        <button
                          onClick={() => {
                            setSelectedClass(classItem);
                            setShowManageSubjects(true);
                          }}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          +{classItem.stream.subjects.length - 3} more
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Students Count */}
                <div className="flex items-start space-x-3">
                  <UserGroupIcon className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Total Students</p>
                    <p className="text-sm font-medium text-gray-900">{classItem.totalStudents}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Class Modal */}
      {showAddClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Class</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Class Name</label>
                  <input type="text" placeholder="e.g., 10 A" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Grade</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stream</label>
                <select className="mt-1 w-full px-4 py-2 border rounded-md">
                  <option value="">Select Stream</option>
                  {streams.map(stream => (
                    <option key={stream.id} value={stream.id}>{stream.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Head Teacher</label>
                <select className="mt-1 w-full px-4 py-2 border rounded-md">
                  <option value="">Select Head Teacher</option>
                  {availableTeachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddClass(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assign Teacher Modal */}
      {showAssignTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Assign Head Teacher</h2>
            <div className="space-y-4">
              {availableTeachers.map((teacher) => (
                <div key={teacher.id} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <p className="font-medium">{teacher.name}</p>
                    <p className="text-sm text-gray-500">
                      {teacher.department} | {teacher.specialization.join(', ')}
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
                    Assign
                  </button>
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAssignTeacher(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassManagement;