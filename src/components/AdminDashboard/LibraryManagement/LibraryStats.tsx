import React from 'react';
import {
  BookOpenIcon,
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { LibraryStats } from '.';


interface StatsProps {
  stats: LibraryStats;
}

export const LibraryStatsCards: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Books</p>
            <p className="text-2xl font-bold">{stats.totalBooks}</p>
          </div>
          <BookOpenIcon className="h-8 w-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Books Borrowed</p>
            <p className="text-2xl font-bold">{stats.borrowedBooks}</p>
          </div>
          <ArrowRightIcon className="h-8 w-8 text-orange-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Due This Week</p>
            <p className="text-2xl font-bold">{stats.dueThisWeek}</p>
          </div>
          <ClockIcon className="h-8 w-8 text-red-500" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Members</p>
            <p className="text-2xl font-bold">{stats.activeMembers}</p>
          </div>
          <UserIcon className="h-8 w-8 text-green-500" />
        </div>
      </div>
    </div>
  );
};