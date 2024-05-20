
import { useState } from "react";
import { ArrowRightStartOnRectangleIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import { logout } from "../../utils";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="flex justify-between rounded-lg items-center py-2 p-4 bg-white shadow-sm text-black">
            {/* Left section with welcome message and wave icon */}
            <div className="flex items-center mr-auto">
                <span className="font-bold">Welcome back, Ms Mathibela!</span>
            </div>
            <BellIcon className="w-5 h-5" />
            <div onClick={toggleDropdown} className="flex items-center rounded-full p-2">
                <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-10 h-10 border rounded-full mr-2" />
                <div className="relative">
                    <button className="flex items-center focus:outline-none">
                        <div>
                            <span className="mr-2 font-medium">Ms Mathibela</span>
                            {/* <br /> */}
                            <span className="block text-left text-sm">Admin</span>
                        </div>
                        {/* {!isOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />} */}
                    </button>

                    {isOpen && <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                        <Link to={'/dashboard/profile'} className=" flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-800 rounded-lg hover:text-white w-full text-left"><UserIcon className="h-5 w-5 mr-2" /> User Profile</Link>
                        <button onClick={logout} className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-800 rounded-lg hover:text-white w-full text-left"><ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-2" />Logout</button>
                    </div>}
                </div>
            </div>
        </header>
    );
};