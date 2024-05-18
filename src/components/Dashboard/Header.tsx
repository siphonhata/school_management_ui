
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="flex justify-between rounded-lg items-center p-4 bg-white shadow-sm text-black">
            {/* Notification icon */}
            <div className="mr-auto">
                {/* Insert your notification icon here */}
            </div>
            {/* User avatar and dropdown */}
            <div className="flex items-center rounded-full shadow-md p-2">
                {/* User avatar */}
                <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-8 h-8 border rounded-full mr-2" />
                {/* Dropdown menu */}
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                        <span className="mr-2">Ms Mathibela</span>
                        {!isOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />}
                    </button>
                    {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                        <Link to={'/dashboard/profile'} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Admin Profile</Link>
                        <button className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left">Sign Out</button>
                    </div>}
                </div>
            </div>
        </header>
    );
};