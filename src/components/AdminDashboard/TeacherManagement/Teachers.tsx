import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  ChevronDownIcon
} from '@heroicons/react/20/solid';
import TeacherForm from './TeacherForm';

interface Teacher {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  subjects: string[];
  joinDate: string;
  status: 'active' | 'on leave' | 'inactive';
  image: string | null;
  classTeacher: string;
}

export const TeachersComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  // Sample data
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@school.com',
      phone: '(555) 123-4567',
      department: 'Science',
      subjects: ['Physics', 'Chemistry'],
      joinDate: '2020-08-15',
      status: 'active',
      image: null,
      classTeacher: '12A'
    },
    {
      id: 2,
      name: 'Prof. Michael Brown',
      email: 'michael.brown@school.com',
      phone: '(555) 234-5678',
      department: 'Mathematics',
      subjects: ['Mathematics', 'Statistics'],
      joinDate: '2019-07-20',
      status: 'active',
      image: null,
      classTeacher: '11B'
    },
  ]);

  const filters = [
    { id: 'all', label: 'All Teachers' },
    { id: 'active', label: 'Active' },
    { id: 'on_leave', label: 'On Leave' },
    { id: 'inactive', label: 'Inactive' }
  ];

  const departments = [
    'All Departments',
    'Science',
    'Mathematics',
    'English',
    'Social Studies',
    'Physical Education',
    'Arts'
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAddTeacher = () => {
    setSelectedTeacher(null); // Ensure we're in 'add' mode, not 'edit' mode
    setIsFormOpen(true);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedTeacher(null);
  };

  const handleSubmitForm = (formData: any) => {
    if (selectedTeacher) {
      // Edit existing teacher
      setTeachers(teachers.map(teacher => 
        teacher.id === selectedTeacher.id 
          ? { ...teacher, ...formData }
          : teacher
      ));
    } else {
      // Add new teacher
      const newTeacher = {
        id: teachers.length + 1,
        ...formData,
        image: null,
      };
      setTeachers([...teachers, newTeacher]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Teachers</h2>
          <button 
            onClick={handleAddTeacher}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Teacher
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  selectedFilter === filter.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <select
                className="pl-3 pr-10 py-2 text-sm border rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept.toLowerCase()}>
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search teachers..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FunnelIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subjects
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Teacher
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      {teacher.image ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={teacher.image}
                          alt={teacher.name}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-800 font-medium">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {teacher.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {teacher.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{teacher.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.classTeacher}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${teacher.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                    ${teacher.status === 'on leave' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${teacher.status === 'inactive' ? 'bg-red-100 text-red-800' : ''}`}
                  >
                    {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button 
                    onClick={() => handleEditTeacher(teacher)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <EllipsisVerticalIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing 1 to {teachers.length} of {teachers.length} results
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Teacher Form Modal */}
      {isFormOpen && (
        <TeacherForm
          teacher={selectedTeacher || undefined}
          onClose={handleCloseForm}
          onSubmit={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default TeachersComponent;