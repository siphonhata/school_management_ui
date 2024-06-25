import React, { useEffect, useState } from "react";
import { api_url } from "../../App";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa";
import { TeachersCard } from ".";


const teachers = [
  { name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/130459271?v=4' },
  { name: 'Jane Smith', avatar: 'https://avatars.githubusercontent.com/u/92311415?v=4' },
  { name: 'Michael Johnson', avatar: 'https://avatars.githubusercontent.com/u/123639497?v=4' },
  { name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/107940999?v=4' },
  { name: 'Jane Smith', avatar: 'https://avatars.githubusercontent.com/u/70771445?v=4' },
  { name: 'Michael Johnson', avatar: 'https://via.placeholder.com/150' },
  { name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
  { name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
  { name: 'Michael Johnson', avatar: 'https://via.placeholder.com/150' },
];

export const HomeAdmin: React.FC = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalParents: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(`${api_url}/stats`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    }

    fetchStats();
  }, []);

  const statData = [
    {
      id: 1,
      icon: <FaUserGraduate className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Students',
      value: 1200, // Replace this with stats.totalStudents
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Teachers',
      value: 80, // Replace this with stats.totalTeachers
    },
    {
      id: 3,
      icon: <FaUsers className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Parents',
      value: 2400, // Replace this with stats.totalParents
    },
    {
      id: 4,
      icon: <FaDollarSign className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Revenue',
      value: 500000, // Replace this with stats.totalRevenue
    },
  ];
  return (
    <div className="">
      <div className="flex space-x-4 overflow-x-auto">
        {statData?.map((stat: any) => (
          <div key={stat.id} className="w-60 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
            <div className="flex items-center mt-4">
              {stat.icon}
              <div>
                <div className="text-sm font-semibold text-gray-400">{stat.label}</div>
                <div className="font-medium text-gray-900">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============================ */}
      <div className="mt-4">
        <TeachersCard teachers={teachers} />
      </div>
    </div>
  );
};
