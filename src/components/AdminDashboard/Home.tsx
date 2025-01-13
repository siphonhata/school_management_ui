import React, { useEffect, useState } from "react";
import { api_url } from "../../App";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa";
import { AttendanceDoughnutChart, CalendarComponent, NoticeBoardCard, TeachersCard } from ".";
import { SubjectPerformanceChart } from "./SubjectPerformanceChart";


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
      value: stats.totalStudents,
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Teachers',
      value: stats.totalTeachers,
    },
    {
      id: 3,
      icon: <FaUsers className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Parents',
      value: stats.totalParents,
    },
    {
      id: 4,
      icon: <FaDollarSign className="mr-3 h-6 w-6 text-gray-900" />,
      label: 'Total Revenue',
      value: 500000, // Replace this with stats.totalRevenue
    },
  ];
  const events = [
    { date: new Date(2024, 5, 25), title: "Sport day", description: "Sport day Event" },
    { date: new Date(2024, 5, 28), title: "Teachers Day", description: "Teacher event" },
    { date: new Date(2024, 6, 2), title: "Fun day", description: "Fun day Event" },
    { date: new Date(2024, 6, 3), title: "Fun day", description: "Fun day Event" },
    { date: new Date(2024, 6, 9), title: "Fun day", description: "Fun day Event" },
    { date: new Date(2024, 11, 25), title: "Matric Dance Function", description: "" },
  ];

  const generateRandomGrade = () => Math.floor(Math.random() * 30) + 70; // Random grade between 70 and 100

  const teachers = ['Mr. Smith', 'Ms. Johnson', 'Mrs. Davis', 'Mr. Wilson', 'Ms. Brown'];
  const grades = ['9th', '10th', '11th', '12th'];
  const subjects = ['Math', 'Science', 'English', 'History', 'Physics', 'Chemistry', 'Biology', 'Literature'];

  const performanceData = subjects.flatMap(subject =>
    grades.flatMap(grade =>
      teachers.map(teacher => ({
        subject,
        grade,
        teacher,
        averageGrade: generateRandomGrade()
      }))
    )
  );
  const attendance = {
    students: 3200, // Total number of students
    teachers: 550, // Total number of teachers
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4">
        {statData?.map((stat: any) => (
          <div key={stat.id} className="w-full h-20 bg-white text-gray-400 rounded-lg flex flex-col-reverse justify-between items-center shadow-sm p-4 mt-3">
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
      <div className="bg-white my-5 px-4 rounded-lg grid grid-cols-5 gap-4">
        <div className="my-4 col-span-3">

          {/* <AttendanceCard attendance={attendance} /> */}
          {/* <AttendanceDoughnutChart attendance={attendance} /> */}
          <SubjectPerformanceChart
            performanceData={performanceData}
            teachers={teachers}
            grades={grades}
            subjects={subjects}
          />
          <NoticeBoardCard />
        </div>
        <div className="my-4 col-span-2 col-start-4">
          <TeachersCard teachers={teachers} />
          <CalendarComponent events={events} />
        </div>
      </div>


    </div>
  );
};
