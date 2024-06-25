import React, { useEffect, useState } from "react";
import { api_url } from "../../App";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa";
import { TeachersCard } from ".";


const teachers = [
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

  return (
    <div className="flex justify-between">
      <div className="w-60 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
        <div className="flex items-center mt-4">
          <FaUserGraduate className="mr-3 h-6 w-6 text-gray-900" />
          <div>
            <div className="text-sm font-semibold text-gray-400">
              Total Students
            </div>
            <div className="font-medium text-gray-900">
              {stats.totalStudents}
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
        <div className="flex items-center mt-4">
          <FaChalkboardTeacher className="mr-3 h-6 w-6 text-gray-900" />
          <div>
            <div className="text-sm font-semibold text-gray-400">
              Total Teachers
            </div>
            <div className="font-medium text-gray-900">
              {stats.totalTeachers}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-60 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
        <div className="flex items-center mt-4">
          <FaUsers className="mr-3 h-6 w-6 text-gray-900" />
          <div>
            <div className="text-sm font-semibold text-gray-400">
              Total Parents
            </div>
            <div className="font-medium text-gray-900">
              {stats.totalParents}
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
        <div className="flex items-center mt-4">
          <FaDollarSign className="mr-3 h-6 w-6 text-gray-900" />
          <div>
            <div className="text-sm font-semibold text-gray-400">
              Total Revenue
            </div>
            <div className="font-medium text-gray-900">
              {stats.totalStudents}
            </div>
          </div>
        </div>
      </div>

      {/* ============================ */}
      <TeachersCard teachers={teachers} />
    </div>
  );
};

// const TotalTeachersCard: React.FC = () => {
//   return (
//     <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
//       <div className="flex items-center justify-center font-medium text-gray-900">
//         456
//       </div>
//       <div className="flex items-center text-sm font-semibold">
//         Total Teachers
//       </div>
//     </div>
//   );
// }

// const TotalParentsCard: React.FC = () => {
//   return (
//     // <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
//     //   <div className="flex items-center justify-center font-medium text-gray-900">
//     //     789
//     //   </div>
//     //   <div className="flex items-center text-sm font-semibold">
//     //     Total Parents
//     //   </div>
//     // </div>
//   );
// }

// const TotalRevenueCard: React.FC = () => {
//   return (
//     // <div className="w-48 h-16 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
//     //   <div className="flex items-center justify-center font-medium text-gray-900">
//     //     101112
//     //   </div>
//     //   <div className="flex items-center text-sm font-semibold">
//     //     Total Revenue
//     //   </div>
//     // </div>
//   );
// }
