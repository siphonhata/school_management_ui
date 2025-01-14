import React, { useState } from 'react';
import {
  PlusIcon,
  WrenchScrewdriverIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Vehicle } from '.';


interface VehiclesListProps {
  searchQuery: string;
}

export const VehiclesList: React.FC<VehiclesListProps> = ({ searchQuery }) => {
  const [vehicles] = useState<Vehicle[]>([
    {
      id: 'V001',
      registrationNumber: 'KA-01-1234',
      capacity: 40,
      model: 'Volvo B7R',
      year: '2020',
      status: 'active',
      lastMaintenance: '2024-01-01',
      nextMaintenance: '2024-03-01',
      fuelEfficiency: '8 km/l'
    },
    {
      id: 'V002',
      registrationNumber: 'KA-01-5678',
      capacity: 35,
      model: 'Ashok Leyland',
      year: '2021',
      status: 'maintenance',
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-03-15',
      fuelEfficiency: '7 km/l'
    }
  ]);

  const [showAddVehicle, setShowAddVehicle] = useState(false);

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Vehicles</h2>
        <button
          onClick={() => setShowAddVehicle(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Vehicle</span>
        </button>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-lg border shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{vehicle.model}</h3>
                <p className="text-sm text-gray-500">{vehicle.registrationNumber}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                vehicle.status === 'active' 
                  ? 'bg-green-100 text-green-800'
                  : vehicle.status === 'maintenance'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500">Capacity:</span>{' '}
                <span className="text-gray-900">{vehicle.capacity} seats</span>
              </p>
              <p>
                <span className="text-gray-500">Year:</span>{' '}
                <span className="text-gray-900">{vehicle.year}</span>
              </p>
              <p>
                <span className="text-gray-500">Fuel Efficiency:</span>{' '}
                <span className="text-gray-900">{vehicle.fuelEfficiency}</span>
              </p>
            </div>

            {vehicle.status === 'active' && vehicle.nextMaintenance && (
              <div className="mt-4 flex items-center text-sm text-yellow-600">
                <WrenchScrewdriverIcon className="h-4 w-4 mr-1" />
                <span>Next maintenance: {vehicle.nextMaintenance}</span>
              </div>
            )}

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Details
              </button>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ExclamationCircleIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};