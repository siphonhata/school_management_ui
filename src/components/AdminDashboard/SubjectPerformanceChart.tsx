import React, { useState, useEffect, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register components to ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type PerformanceData = {
  subject: string;
  averageGrade: number;
  teacher: string;
  grade: string;
};

type SubjectPerformanceChartProps = {
  performanceData: PerformanceData[];
  teachers: string[];
  grades: string[];
  subjects: string[];
};

// Function to generate a random color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  return `rgba(${r}, ${g}, ${b}, 0.6)`;
};

export const SubjectPerformanceChart: React.FC<SubjectPerformanceChartProps> = ({
  performanceData,
  teachers,
  grades,
  subjects,
}) => {
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const [teacherColors, setTeacherColors] = useState<Record<string, string>>({});

  useEffect(() => {
    const colors: Record<string, string> = {};
    teachers.forEach(teacher => {
      colors[teacher] = getRandomColor();
    });
    setTeacherColors(colors);
  }, [teachers]);

  useEffect(() => {
    const newFilteredData = performanceData.filter((item) => {
      return (
        (!selectedTeacher || item.teacher === selectedTeacher) &&
        (!selectedGrade || item.grade === selectedGrade) &&
        (!selectedSubject || item.subject === selectedSubject)
      );
    });
  }, [performanceData, selectedTeacher, selectedGrade, selectedSubject]);

  const filteredData = useMemo(() => {
    return performanceData.filter((item) => {
      return (
        (!selectedTeacher || item.teacher === selectedTeacher) &&
        (!selectedGrade || item.grade === selectedGrade) &&
        (!selectedSubject || item.subject === selectedSubject)
      );
    });
  }, [performanceData, selectedTeacher, selectedGrade, selectedSubject]);

  const data = {
    labels: subjects,
    datasets: teachers.map(teacher => {
      const color = teacherColors[teacher] || getRandomColor();
      return {
        label: teacher,
        data: subjects.map(subject => {
          const item = filteredData.find(d => d.teacher === teacher && d.subject === subject);
          return item ? item.averageGrade : 0;
        }),
        backgroundColor: color,
        borderColor: color.replace('0.6', '1'),
        borderWidth: 1,
      };
    }),
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Average Grade',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Subjects',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 sm:mb-0">Subject Performance</h3>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="">All Teachers</option>
            {teachers.map((teacher) => (
              <option key={teacher} value={teacher}>
                {teacher}
              </option>
            ))}
          </select>
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="">All Grades</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};
