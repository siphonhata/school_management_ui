import React from 'react';



export const TeachersCard = ({ teachers }: any) => {
    return (
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Teachers List</h2>
                <a href="#" className="text-blue-500 hover:underline">See more</a>
            </div>
            <div className="flex mb-4 -space-x-2">
                {teachers.map((teacher: any, index: any) => (
                    <img
                        key={index}
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                    />
                ))}
            </div>
            <div className="flex">
                <input
                    type="email"
                    placeholder="Invite with email"
                    className="w-full p-2 border rounded-l-lg focus:outline-none"
                />
                <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                    Invite
                </button>
            </div>
        </div>
    );
};
