import React, { useState } from 'react';
import {
  PlusIcon,
  PhoneIcon,
  IdentificationIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { Driver } from '.';


interface DriversListProps {
  searchQuery: string;
}

export const DriversList: React.FC<DriversListProps> = ({ searchQuery }) => {
  const [drivers] = useState<Driver[]>([
    {
      id: 'D001',
      name: 'John Smith',
      licenseNumber: 'DL123456789',
      contact: '+1234567890',
      experience: 8,
      status: 'available',
      joiningDate: '2020-03-15',
      rating: 4.8
    },
    {
      id: 'D002',
      name: 'Mike Johnson',
      licenseNumber: 'DL987654321',
      contact: '+1234567891',
      experience: 5,
      status: 'on-duty',
      joiningDate: '2021-06-20',
      rating: 4.5
    }
  ]);

  const [showAddDriver, setShowAddDriver] = useState(false);

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.licenseNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Drivers</h2>
        <button
          onClick={() => setShowAddDriver(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Driver</span>
        </button>
      </div>

      {/* Drivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDrivers.map((driver) => (
          <div key={driver.id} className="bg-white rounded-lg border shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{driver.name}</h3>
                <div className="flex items-center mt-1">
                  <IdentificationIcon className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-500">{driver.licenseNumber}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                driver.status === 'available' 
                  ? 'bg-green-100 text-green-800'
                  : driver.status === 'on-duty'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {driver.status.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-900">{driver.contact}</span>
              </div>
              
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-gray-900">{driver.rating} / 5.0</span>
              </div>

              <p>
                <span className="text-gray-500">Experience:</span>{' '}
                <span className="text-gray-900">{driver.experience} years</span>
              </p>
              
              <p>
                <span className="text-gray-500">Joined:</span>{' '}
                <span className="text-gray-900">
                  {new Date(driver.joiningDate).toLocaleDateString()}
                </span>
              </p>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Profile
              </button>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-gray-600 hover:text-gray-800">
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};