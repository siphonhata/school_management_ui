import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components to ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

type AttendanceData = {
    students: number;
    teachers: number;
};

type AttendanceDoughnutChartProps = {
    attendance: AttendanceData;
};

export const AttendanceDoughnutChart: React.FC<AttendanceDoughnutChartProps> = ({ attendance }) => {
    const data = {
        labels: ['Students', 'Teachers'],
        datasets: [
            {
                data: [attendance.students, attendance.teachers],
                hoverBackgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(178, 222, 39, 0.5)'], // Pink and light green
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(195, 225, 104, 0.7)'],
                borderWidth: 1,
                cutout: '70%', // Adjust the thickness of the doughnut
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Attendance Overview',
            },
        },
        maintainAspectRatio: false, // Disable aspect ratio to control the size
    };

    return (
        <div className="mb-4 bg-white p-5 rounded-lg shadow">
            < h3 className="text-lg font-bold mb-4" > Attendance Overview</h3 >
            <div className='mx-auto' style={{ height: '300px', width: '300px' }} ><Doughnut data={data} options={options} /></div>
        </div >
    );
};
