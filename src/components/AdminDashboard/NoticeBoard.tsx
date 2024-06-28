import React from 'react';
import { FaPlus, FaEllipsisH, FaEye } from 'react-icons/fa';

const notices = [
    {
        id: 1,
        image: 'https://via.placeholder.com/50',
        title: 'Notice Title 1',
        dateCreated: '2024-10-25',
        seenCount: 123,
        type: "Competion"
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/50',
        title: 'Notice Title 2',
        dateCreated: '2024-08-24',
        seenCount: 456,
        type: "Routine published"
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/50',
        title: 'Notice Title 2',
        dateCreated: '2024-12-24',
        seenCount: 456,
        type: "Routine published"
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/50',
        title: 'Notice Title 2',
        dateCreated: '2024-06-24',
        seenCount: 456,
        type: "Routine published"
    },
    // Add more notices as needed
];

const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric' } as any;
    return date.toLocaleDateString('en-US', options);
};

export const NoticeBoardCard = () => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4 text-gray-800">
                <h2 className="text-xl font-bold">Notice Board</h2>
                <FaPlus className="text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
            <table className="w-full">
                <tbody>
                    {notices.map((notice) => (
                        <tr key={notice.id} className="mb-2 rounded-md shadow-sm">
                            <td className="p-2">
                                <div className="flex items-center">
                                    <img
                                        src={notice.image}
                                        alt={notice.title}
                                        className="w-12 h-12 rounded-md mr-4"
                                    />
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-semibold text-gray-800">{notice.title}</h3>
                                        <p className='text-sm text-gray-300'>{notice.type}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 text-sm text-gray-500">{formatDateString(notice.dateCreated)}</td>
                            <td className="p-2 text-sm text-gray-500 flex justify-center items-center mt-4">
                                <FaEye className="mr-1" />
                                {notice.seenCount}
                            </td>
                            <td className="p-2">
                                <FaEllipsisH className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
