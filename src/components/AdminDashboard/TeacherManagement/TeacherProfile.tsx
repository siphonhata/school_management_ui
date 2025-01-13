import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  ClockIcon,
  CalendarIcon,
  UserGroupIcon,
  BookOpenIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface Schedule {
  day: string;
  periods: {
    time: string;
    subject: string;
    class: string;
  }[];
}

interface TeacherData {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  qualification: string;
  specialization: string;
  joinDate: string;
  subjects: string[];
  classTeacher: string;
  schedule: Schedule[];
  achievements: {
    date: string;
    title: string;
    description: string;
  }[];
  upcomingTasks: {
    id: number;
    task: string;
    dueDate: string;
    type: string;
  }[];
}

interface TeacherProfileProps {
  teacher?: TeacherData;
}

const defaultTeacher: TeacherData = {
  id: 1,
  name: 'Dr. Sarah Wilson',
  email: 'sarah.wilson@school.com',
  phone: '(555) 123-4567',
  department: 'Science',
  qualification: 'Ph.D. in Physics',
  specialization: 'Quantum Physics',
  joinDate: '2020-08-15',
  subjects: ['Physics', 'Chemistry'],
  classTeacher: '12A',
  schedule: [
    {
      day: 'Monday',
      periods: [
        { time: '8:00 AM - 9:00 AM', subject: 'Physics', class: '12A' },
        { time: '9:00 AM - 10:00 AM', subject: 'Physics', class: '11B' },
      ]
    }
  ],
  achievements: [
    {
      date: '2023-12',
      title: 'Best Teacher Award',
      description: 'Recognized for outstanding contribution to STEM education'
    }
  ],
  upcomingTasks: [
    {
      id: 1,
      task: 'Prepare Term Test Papers',
      dueDate: '2024-01-20',
      type: 'exam'
    }
  ]
};

export const TeacherProfile: React.FC<TeacherProfileProps> = ({ teacher = defaultTeacher }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center">
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-semibold text-blue-800">
            {teacher.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">{teacher.name}</h2>
            <div className="mt-1 text-gray-600">{teacher.qualification}</div>
            <div className="mt-2 flex items-center text-gray-600">
              <AcademicCapIcon className="w-5 h-5 mr-2" />
              <span>{teacher.department}</span>
              {teacher.classTeacher && (
                <>
                  <span className="mx-2">•</span>
                  <span>Class Teacher: {teacher.classTeacher}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 p-6">
        {/* Contact & Basic Info */}
        <div className="col-span-1">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <EnvelopeIcon className="w-5 h-5 mr-3" />
                <span>{teacher.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <span>{teacher.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="w-5 h-5 mr-3" />
                <span>Joined: {teacher.joinDate}</span>
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Subjects Teaching</h3>
            <div className="flex flex-wrap gap-2">
              {teacher.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">Upcoming Tasks</h3>
            <div className="space-y-3">
              {teacher.upcomingTasks.map((task) => (
                <div key={task.id} className="bg-white p-3 rounded-lg border">
                  <div className="text-sm font-medium text-gray-900">{task.task}</div>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    Due: {task.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="col-span-2">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Teaching Schedule</h3>
            <div className="space-y-4">
              {teacher.schedule.map((day, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border">
                  <h4 className="font-medium text-gray-900 mb-3">{day.day}</h4>
                  <div className="space-y-2">
                    {day.periods.map((period, periodIndex) => (
                      <div key={periodIndex} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <BookOpenIcon className="w-5 h-5 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {period.subject} - Class {period.class}
                            </div>
                            <div className="text-xs text-gray-500">{period.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Achievements & Contributions</h3>
            <div className="space-y-4">
              {teacher.achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border">
                  <div className="flex items-start">
                    <DocumentTextIcon className="w-5 h-5 text-blue-500 mt-1" />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{achievement.title}</div>
                      <div className="mt-1 text-sm text-gray-500">{achievement.description}</div>
                      <div className="mt-1 text-xs text-gray-400">{achievement.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
              <UserGroupIcon className="w-5 h-5 mr-2" />
              Schedule Meeting
            </button>
            <button className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center">
              <DocumentTextIcon className="w-5 h-5 mr-2" />
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}