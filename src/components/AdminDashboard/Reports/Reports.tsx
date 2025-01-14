import React, { useState } from 'react';
import {
  ChartBarIcon,
  DocumentChartBarIcon,
  ChartPieIcon,
  ArrowDownTrayIcon,
  FunnelIcon,
  CalendarIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

export const ReportsManagement: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('academic');

  // Report categories with their specific reports
  const reportCategories = {
    academic: {
      title: 'Academic Reports',
      icon: <ChartBarIcon className="h-5 w-5" />,
      reports: [
        'Class Performance Analysis',
        'Subject-wise Performance',
        'Grade Distribution',
        'Student Progress Report',
        'Exam Analysis Report'
      ]
    },
    attendance: {
      title: 'Attendance Reports',
      icon: <DocumentChartBarIcon className="h-5 w-5" />,
      reports: [
        'Daily Attendance Summary',
        'Monthly Attendance Report',
        'Class-wise Attendance',
        'Teacher Attendance Report',
        'Attendance Trend Analysis'
      ]
    },
    financial: {
      title: 'Financial Reports',
      icon: <ChartPieIcon className="h-5 w-5" />,
      reports: [
        'Fee Collection Summary',
        'Outstanding Payments',
        'Monthly Revenue Report',
        'Expense Analysis',
        'Salary Disbursement Report'
      ]
    },
    transport: {
      title: 'Transport Reports',
      icon: <ChartBarIcon className="h-5 w-5" />,
      reports: [
        'Route Utilization',
        'Vehicle Performance',
        'Transport Fee Collection',
        'Driver Performance Report'
      ]
    },
    library: {
      title: 'Library Reports',
      icon: <ChartBarIcon className="h-5 w-5" />,
      reports: [
        'Book Circulation Status',
        'Most Borrowed Books',
        'Overdue Books Report',
        'Library Usage Statistics'
      ]
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-sm text-gray-500">Generate and analyze various school reports</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-gray-600 bg-white rounded-lg flex items-center space-x-2 border hover:bg-gray-50">
            <PrinterIcon className="h-5 w-5" />
            <span>Print</span>
          </button>
          <button className="px-4 py-2 text-gray-600 bg-white rounded-lg flex items-center space-x-2 border hover:bg-gray-50">
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Report Categories Navigation */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {Object.entries(reportCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 whitespace-nowrap ${
              activeCategory === key 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-gray-400" />
          <select className="px-4 py-2 border rounded-lg">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <FunnelIcon className="h-5 w-5 text-gray-400" />
          <select className="px-4 py-2 border rounded-lg">
            <option>All Classes</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
        </div>
        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          Apply Filters
        </button>
      </div>

      {/* Available Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportCategories[activeCategory as keyof typeof reportCategories].reports.map((report, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium text-gray-900">{report}</h3>
            <p className="text-sm text-gray-500 mt-1">
              Generate detailed {report.toLowerCase()} with visualizations and insights
            </p>
            <div className="mt-4 flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Generate Report
              </button>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <PrinterIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ArrowDownTrayIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsManagement;