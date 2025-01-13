import React, { useState } from 'react';
import {
  TruckIcon,
  UserGroupIcon,
  MapIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { DriversList, TransportStats, TransportStatsCards, VehiclesList } from '.';


const TransportManagement: React.FC = () => {
  const [activeView, setActiveView] = useState<'vehicles' | 'drivers' | 'routes' | 'students'>('vehicles');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample stats data
  const stats: TransportStats = {
    totalVehicles: 12,
    activeVehicles: 10,
    totalDrivers: 15,
    activeRoutes: 8,
    totalStudents: 320
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transport Management</h1>
      </div>

      {/* Stats Section */}
      <TransportStatsCards stats={stats} />

      {/* Navigation and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView('vehicles')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeView === 'vehicles' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <TruckIcon className="h-5 w-5" />
            <span>Vehicles</span>
          </button>
          <button
            onClick={() => setActiveView('drivers')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeView === 'drivers' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <UserIcon className="h-5 w-5" />
            <span>Drivers</span>
          </button>
          <button
            onClick={() => setActiveView('routes')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeView === 'routes' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <MapIcon className="h-5 w-5" />
            <span>Routes</span>
          </button>
          <button
            onClick={() => setActiveView('students')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeView === 'students' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600'
            }`}
          >
            <UserGroupIcon className="h-5 w-5" />
            <span>Students</span>
          </button>
        </div>

        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeView}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow">
        {activeView === 'vehicles' && <VehiclesList searchQuery={searchQuery} />}
        {activeView === 'drivers' && <DriversList searchQuery={searchQuery} />}
        {/* {activeView === 'routes' && <RoutesList searchQuery={searchQuery} />}
        {activeView === 'students' && <StudentTransport searchQuery={searchQuery} />} */}
      </div>
    </div>
  );
};

export default TransportManagement;