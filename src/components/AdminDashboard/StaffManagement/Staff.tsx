import React, { useState } from 'react';
import {
  UserIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  BriefcaseIcon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

interface Staff {
  id: string;
  name: string;
  role: string;
  department: string;
  employeeId: string;
  joinDate: string;
  contact: string;
  email: string;
  status: 'active' | 'on-leave' | 'inactive';
  type: 'teaching' | 'non-teaching';
  image?: string;
}

export const StaffManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'teaching' | 'non-teaching'>('all');
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showStaffDetails, setShowStaffDetails] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [staffList] = useState<Staff[]>([
    {
      id: '1',
      name: 'John Smith',
      role: 'Science Teacher',
      department: 'Science',
      employeeId: 'EMP001',
      joinDate: '2023-01-15',
      contact: '(555) 123-4567',
      email: 'john.smith@school.com',
      status: 'active',
      type: 'teaching'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      role: 'Librarian',
      department: 'Library',
      employeeId: 'EMP002',
      joinDate: '2023-03-20',
      contact: '(555) 234-5678',
      email: 'sarah.wilson@school.com',
      status: 'active',
      type: 'non-teaching'
    }
  ]);

  const filteredStaff = staffList.filter(staff => 
    (activeTab === 'all' || staff.type === activeTab) &&
    (staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     staff.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
     staff.department.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
        <button
          onClick={() => setShowAddStaff(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Staff Member</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'all' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Staff
          </button>
          <button
            onClick={() => setActiveTab('teaching')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'teaching' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Teaching
          </button>
          <button
            onClick={() => setActiveTab('non-teaching')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'non-teaching' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Non-Teaching
          </button>
        </div>
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search staff..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64"
          />
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStaff.map((staff) => (
          <div 
            key={staff.id}
            className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 rounded-full p-2">
                    <UserCircleIcon className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-gray-500">{staff.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => {
                      setSelectedStaff(staff);
                      setShowStaffDetails(true);
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <PencilIcon className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  {staff.department}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Joined {new Date(staff.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {staff.contact}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {staff.email}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ID: {staff.employeeId}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    staff.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : staff.status === 'on-leave'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Staff Modal */}
      {showAddStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add Staff Member</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                  <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <input type="text" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option>Science</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Administration</option>
                    <option>Library</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input type="tel" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Join Date</label>
                  <input type="date" className="mt-1 w-full px-4 py-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Staff Type</label>
                  <select className="mt-1 w-full px-4 py-2 border rounded-md">
                    <option value="teaching">Teaching</option>
                    <option value="non-teaching">Non-Teaching</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddStaff(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Staff Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Staff Details Modal */}
      {showStaffDetails && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Staff Details</h2>
            {/* Add detailed staff information and edit form here */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowStaffDetails(false)}
                className="px-4 py-2 border rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagement;