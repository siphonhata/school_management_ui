import React, { useState } from 'react';
import {
  PlusIcon,
  CalendarDaysIcon,
  ListBulletIcon,
  FunnelIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { EventStats } from '.';
import { Event } from '.';


export const EventManagement: React.FC = () => {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');

  const stats: EventStats = {
    totalEvents: 24,
    upcomingEvents: 8,
    ongoingEvents: 2,
    thisMonthEvents: 12
  };

  const eventTypes = [
    { value: 'all', label: 'All Events', color: 'gray' },
    { value: 'academic', label: 'Academic', color: 'blue' },
    { value: 'sports', label: 'Sports', color: 'green' },
    { value: 'cultural', label: 'Cultural', color: 'purple' },
    { value: 'meeting', label: 'Meetings', color: 'yellow' },
    { value: 'holiday', label: 'Holidays', color: 'red' },
    { value: 'exam', label: 'Exams', color: 'orange' }
  ];

  const [events] = useState<Event[]>([
    {
      id: 'E001',
      title: 'Annual Sports Day',
      description: 'Annual school sports event with various competitions',
      type: 'sports',
      startDate: '2024-02-15',
      endDate: '2024-02-15',
      startTime: '09:00',
      endTime: '17:00',
      location: 'School Ground',
      organizer: 'Sports Department',
      status: 'upcoming',
      priority: 'high'
    }
    // Add more sample events
  ]);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-sm text-gray-500">Manage school events and activities</p>
        </div>
        <button
          onClick={() => setShowAddEvent(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Event</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Events</p>
              <p className="text-2xl font-bold">{stats.totalEvents}</p>
            </div>
            <CalendarDaysIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Upcoming Events</p>
              <p className="text-2xl font-bold">{stats.upcomingEvents}</p>
            </div>
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <ArrowRightIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Ongoing Events</p>
              <p className="text-2xl font-bold">{stats.ongoingEvents}</p>
            </div>
            <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="h-5 w-5 text-yellow-600">▶</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold">{stats.thisMonthEvents}</p>
            </div>
            <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
              <CalendarDaysIcon className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* View Toggle and Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setView('calendar')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              view === 'calendar' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <CalendarDaysIcon className="h-5 w-5" />
            <span>Calendar</span>
          </button>
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              view === 'list' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <ListBulletIcon className="h-5 w-5" />
            <span>List</span>
          </button>
        </div>

        <div className="flex space-x-2">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            {eventTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <button className="p-2 border rounded-lg hover:bg-gray-50">
            <FunnelIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow">
        {/* Calendar or List View will go here */}
      </div>
    </div>
  );
};

export default EventManagement;