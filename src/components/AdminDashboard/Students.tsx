import { EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const students = [
    {
        id: 1,
        name: 'John Doe',
        image: '/profile.jpg',
        email: "john@gmail.com",
        yearEnrolled: 2020,
        class: 'Class 10A'
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: null,
        email: "Jane@gmail.com",
        yearEnrolled: 2019,
        class: 'Class 11B'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        image: '/profile.jpg',
        email: "Alice@gmail.com",
        yearEnrolled: 2021,
        class: 'Class 9C'
    },
    {
        id: 4,
        name: 'Bob Brown',
        image: '/profile.jpg',
        email: "Bob@gmail.com",
        yearEnrolled: 2020,
        class: 'Class 12D'
    }
];


export const StudentsComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
    };

    const filteredStudents = students.filter((student: any) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-8 h-screen bg-white rounded-md mt-4">
            <div className="flex justify-between"><p className="font-bold text-gray-900 text-2xl mb-2">Students</p>
                <EllipsisVerticalIcon className="h-8 w-8 bg-gray-200 p-1 rounded-full hover:bg-gray-100" /></div>
            <div className="mb-4">
                <div className="flex justify-center items-center border  rounded-md border-gray-300"><MagnifyingGlassIcon className="w-8 h-8 ml-2" />
                    <input
                        type="text"
                        placeholder="Search students"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full px-4 py-2  rounded-md focus:outline-none focus:border-blue-500"
                    /></div>
            </div>
            <table className="w-full border-collapse border rounded-md border-gray-300">
                <thead className="">
                    <tr>
                        <th className=" px-4 py-2">Image</th>
                        <th className=" px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className=" px-4 py-2">Class</th>
                        <th className=" px-4 py-2">GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student: any) => (
                        <tr key={student.id} className=" hover:bg-gray-500 hover:text-white border-t border-gray-300">
                            <td className=" text-center px-4 py-2">
                                {student.image != null ? <img src={student.image} alt={student.name} className="h-10 w-10 rounded-full" /> : <div>
                                    <p className="text-white bg-gray-900 rounded-full w-10 h-10 flex justify-center items-center">
                                        {student.name[0]}
                                    </p>
                                </div>}
                            </td>
                            <td className="text-center px-4 py-2">{student.name}</td>
                            <td className="text-center px-4 py-2">{student.email}</td>
                            <td className="text-center px-4 py-2">{student.class}</td>
                            <td className="text-center px-4 py-2">{student.yearEnrolled}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}