import React from 'react';

const TotalStudentsCard: React.FC = () => {
  return (
    <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
      <div className="flex items-center justify-center font-medium text-gray-900">
        123
      </div>
      <div className="flex items-center text-sm font-semibold">
        Total Students
      </div>
    </div>
  );
}

const TotalTeachersCard: React.FC = () => {
  return (
    <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
      <div className="flex items-center justify-center font-medium text-gray-900">
        456
      </div>
      <div className="flex items-center text-sm font-semibold">
        Total Teachers
      </div>
    </div>
  );
}

const TotalParentsCard: React.FC = () => {
  return (
    <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
      <div className="flex items-center justify-center font-medium text-gray-900">
        789
      </div>
      <div className="flex items-center text-sm font-semibold">
        Total Parents
      </div>
    </div>
  );
}

const TotalRevenueCard: React.FC = () => {
  return (
    <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
      <div className="flex items-center justify-center font-medium text-gray-900">
        101112
      </div>
      <div className="flex items-center text-sm font-semibold">
        Total Revenue
      </div>
    </div>
  );
}
export { TotalStudentsCard, TotalParentsCard, TotalRevenueCard, TotalTeachersCard };
