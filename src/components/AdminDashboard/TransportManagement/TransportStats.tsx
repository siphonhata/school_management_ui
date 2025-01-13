import React from 'react';
import {
  TruckIcon,
  UserIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { TransportStats } from '.';


interface StatsProps {
  stats: TransportStats;
}

export const TransportStatsCards: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Vehicles</p>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold">{stats.totalVehicles}</p>
              <p className="text-sm text-green-600 mb-1">({stats.activeVehicles} active)</p>
            </div>
          </div>
          <TruckIcon className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Drivers</p>
            <p className="text-2xl font-bold">{stats.totalDrivers}</p>
          </div>
          <UserIcon className="h-8 w-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Routes</p>
            <p className="text-2xl font-bold">{stats.activeRoutes}</p>
          </div>
          <MapPinIcon className="h-8 w-8 text-orange-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Students Using Transport</p>
            <p className="text-2xl font-bold">{stats.totalStudents}</p>
          </div>
          <UserGroupIcon className="h-8 w-8 text-purple-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Today's Attendance</p>
            <p className="text-2xl font-bold">98%</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 font-medium">✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};