import { useEffect, useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { logout } from "../../utils";
import axios from "axios";
import { api_url } from "../../App";
import { useFetchUser } from "../Common";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, image, loading, error } = useFetchUser();
  // const url = process.env.REACT_APP_API_URL
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between rounded-lg items-center py-2 p-4 bg-white shadow-sm text-black">
      {/* Left section with welcome message and wave icon */}
      <div className="flex items-center mr-auto">
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        <span className="font-bold text-2xl">
          {user?.id_number != null ? `Welcome back, ${user?.gender === "Male" ? "Mr" : "Ms"} ${user?.last_name}!` :
            <>
              <p>Welcome</p>
              <p className="text-red-500 text-sm">Please Complete your profile</p>
            </>
          }
        </span>
      </div>
      <BellIcon className="w-5 h-5" />
      <div
        onClick={toggleDropdown}
        className="flex items-center rounded-full p-2"
      >
        {image ? (
          <img
            src={`data:image/png;base64,${image}`}
            alt="User Avatar"
            className="w-10 h-10 border rounded-full mr-2"
          />
        ) : (
          <img
            src={'/profile.jpg'}
            alt="User Avatar"
            className="w-10 h-10 border rounded-full mr-2"
          />
        )}

        <div className="relative">
          <button className="flex items-center focus:outline-none">
            <div>
              <span className="mr-2 font-medium">
                {user?.first_name} {user?.last_name}
              </span>
              {/* <br /> */}
              <span className="block text-left text-sm">{user?.role}</span>
            </div>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <Link
                to={"/dashboard/profile"}
                className=" flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-800 rounded-lg hover:text-white w-full text-left"
              >
                <UserIcon className="h-5 w-5 mr-2" /> User Profile
              </Link>
              <button
                onClick={logout}
                className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-800 rounded-lg hover:text-white w-full text-left"
              >
                <ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
