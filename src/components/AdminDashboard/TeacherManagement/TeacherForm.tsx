import React, { useState } from 'react';
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

interface TeacherFormData {
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  photo: File | null;
  maritalStatus: string;
  nationality: string;
  
  // Contact Information
  email: string;
  phone: string;
  alternatePhone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;

  // Professional Information
  employeeId: string;
  department: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience: string;
  subjects: string[];
  joinDate: string;
  status: 'active' | 'on leave' | 'inactive';
  
  // Additional Information
  classTeacher?: string;
  languages: string[];
  certificates: string[];
  skills: string[];
  
  // Emergency Contact
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactPhone: string;

  // Documents
  resume: File | null;
  idProof: File | null;
  qualificationCertificates: File[];
}

interface TeacherFormProps {
  teacher?: Partial<TeacherFormData>;
  onClose: () => void;
  onSubmit: (data: TeacherFormData) => void;
}

const defaultTeacherData: TeacherFormData = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  gender: 'male',
  photo: null,
  maritalStatus: '',
  nationality: '',
  email: '',
  phone: '',
  alternatePhone: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  employeeId: '',
  department: '',
  designation: '',
  qualification: '',
  specialization: '',
  experience: '',
  subjects: [],
  joinDate: '',
  status: 'active',
  classTeacher: '',
  languages: [],
  certificates: [],
  skills: [],
  emergencyContactName: '',
  emergencyContactRelation: '',
  emergencyContactPhone: '',
  resume: null,
  idProof: null,
  qualificationCertificates: []
};

export const TeacherForm: React.FC<TeacherFormProps> = ({ teacher, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<TeacherFormData>({
    ...defaultTeacherData,
    ...teacher
  });

  const [activeTab, setActiveTab] = useState('personal');

  const departments = [
    'Mathematics',
    'Science',
    'English',
    'Social Studies',
    'Physical Education',
    'Arts',
    'Computer Science',
    'Languages',
    'Special Education'
  ];

  const designations = [
    'Teacher',
    'Senior Teacher',
    'Head of Department',
    'Coordinator',
    'Vice Principal',
    'Principal'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      if (name === 'qualificationCertificates') {
        setFormData(prev => ({
          ...prev,
          [name]: Array.from(files)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: files[0]
        }));
      }
    }
  };

  const handleArrayInput = (name: keyof TeacherFormData, value: string) => {
    const items = value.split(',').map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      [name]: items
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Information' },
    { id: 'contact', label: 'Contact Details' },
    { id: 'professional', label: 'Professional Details' },
    { id: 'additional', label: 'Additional Information' },
    { id: 'documents', label: 'Documents' }
  ];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-5 mx-auto max-w-6xl bg-white rounded-lg shadow-xl mb-10">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {teacher ? 'Edit Teacher' : 'Add New Teacher'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <nav className="flex space-x-4 px-6" aria-label="Tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-4 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Personal Information Tab */}
          <div className={activeTab === 'personal' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employee ID *
                </label>
                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation *
                </label>
                <select
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Designation</option>
                  {designations.map((desig) => (
                    <option key={desig} value={desig}>{desig}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification *
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="e.g., M.Sc., B.Ed."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Mathematics Education"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience (years) *
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Join Date *
                </label>
                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="active">Active</option>
                  <option value="on leave">On Leave</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subjects Teaching *
                </label>
                <input
                  type="text"
                  value={formData.subjects.join(', ')}
                  onChange={(e) => handleArrayInput('subjects', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subjects separated by commas"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class Teacher Of
                </label>
                <input
                  type="text"
                  name="classTeacher"
                  value={formData.classTeacher}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Class 10A"
                />
              </div>
            </div>
          </div>

          {/* Additional Information Tab */}
          <div className={activeTab === 'additional' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Languages Known
                </label>
                <input
                  type="text"
                  value={formData.languages.join(', ')}
                  onChange={(e) => handleArrayInput('languages', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter languages separated by commas"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills
                </label>
                <input
                  type="text"
                  value={formData.skills.join(', ')}
                  onChange={(e) => handleArrayInput('skills', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter skills separated by commas"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Certificates & Achievements
                </label>
                <input
                  type="text"
                  value={formData.certificates.join(', ')}
                  onChange={(e) => handleArrayInput('certificates', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter certificates separated by commas"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Name *
                </label>
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Relation *
                </label>
                <input
                  type="text"
                  name="emergencyContactRelation"
                  value={formData.emergencyContactRelation}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Phone *
                </label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  value={formData.emergencyContactPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Documents Tab */}
          <div className={activeTab === 'documents' ? 'block' : 'hidden'}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full"
                  accept=".pdf,.doc,.docx"
                  required={!formData.resume}
                />
                {formData.resume && (
                  <p className="mt-1 text-sm text-gray-500">
                    Current file: {formData.resume.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Proof *
                </label>
                <input
                  type="file"
                  name="idProof"
                  onChange={handleFileChange}
                  className="w-full"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required={!formData.idProof}
                />
                {formData.idProof && (
                  <p className="mt-1 text-sm text-gray-500">
                    Current file: {formData.idProof.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification Certificates *
                </label>
                <input
                  type="file"
                  name="qualificationCertificates"
                  onChange={handleFileChange}
                  className="w-full"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  required={formData.qualificationCertificates.length === 0}
                />
                {formData.qualificationCertificates.length > 0 && (
                  <div className="mt-1 text-sm text-gray-500">
                    Current files:
                    <ul className="list-disc pl-5">
                      {formData.qualificationCertificates.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-6 pt-6 border-t flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              {teacher ? 'Update Teacher' : 'Add Teacher'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;