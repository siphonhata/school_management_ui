import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  Header } from '.';
import { ArrowRightStartOnRectangleIcon, CogIcon } from '@heroicons/react/24/solid';

export const DashboardLayout: React.FC<any> = ({ Outlet, navItems }) => {
    const location = useLocation();



    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col rounded-lg m-2 mr-0 fixed top-0 bottom-0">
                <div className="p-4 text-2xl font-bold">Dashboard</div>
                <hr className="border-gray-700 mx-4 mb-2" />
                <nav className="flex-1 overflow-y-auto">
                    {navItems.map((item: any) => (
                        <Link
                            key={item.path}
                            to={`/dashboard/${item.path}`}
                            className={`flex items-center px-4 py-2 m-2 rounded-lg ${location.pathname === `/dashboard/${item.path}` ? 'bg-white text-gray-900' : 'hover:bg-gray-700'
                                }`}
                        >
                            {item.icon}
                            <span className="ml-3">{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto mb-4">
                    <Link
                        to="/dashboard/settings"
                        className={`flex items-center px-4 py-2 m-2 rounded-lg ${location.pathname === '/dashboard/settings' ? 'bg-white text-gray-900' : 'hover:bg-gray-700'
                            }`}
                    >
                        <CogIcon className="h-5 w-5" />
                        <span className="ml-3">Settings</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center px-4 py-2 m-2 rounded-lg hover:bg-gray-700"
                    >
                        <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                        <span className="ml-3">Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64 pt-16"> {/* Add pt-16 for 16px padding top */}
                {/* Header content */}
                <div className="bg-gray-100 m-4 rounded-lg fixed top-0 left-64 right-0 z-10"> <Header /></div>
                <div className="bg-gray-100 flex-1 m-2 p-6 overflow-y-auto">
                    <main>
                        {Outlet}
                    </main>
                </div>
            </div>
        </div>


    );
};
