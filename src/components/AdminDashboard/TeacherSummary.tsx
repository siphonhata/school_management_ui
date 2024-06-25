import React from 'react';



export const TeachersCard = ({ teachers }: any) => {
    return (
        <div className="max-w-sm p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4 text-gray-800">
                <h2 className="text-xl font-bold">Teachers List</h2>
                <p className="hover:underline text-gray-300 hover:text-gray-500">See more</p>
            </div>
            <div className="flex mb-4 space-x-2">
                {teachers.slice(0, 6).map((teacher: any, index: any) => (
                    <img
                        key={index}
                        src={teacher.avatar}
                        alt={teacher.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                    />
                ))}
            </div>
            <p className="text-md font-bold text-gray-800 m-2">Add Teachers</p>
            <div className="flex border rounded-md bg-white overflow-hidden">
                <input
                    type="email"
                    placeholder="Invite with email"
                    className="w-full p-2 outline-none focus:outline-none"
                />
                <button className="p-2 px-4 font-bold bg-gray-900 rounded-md text-white hover:bg-gray-800">
                    Invite
                </button>
            </div>

        </div>
    );
};
