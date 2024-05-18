import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Dashboard, Header } from '.';
import { ArrowRightStartOnRectangleIcon, CogIcon } from '@heroicons/react/24/solid';

export const DashboardLayout: React.FC<any> = ({ Outlet, navItems }) => {
    const location = useLocation();



    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col rounded-lg m-2 mr-0">
                <div className="p-4 text-2xl font-bold">Dashboard</div>
                <hr className="border-gray-700 mx-4 mb-2" />
                <nav className="flex-1">
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
            <div className="flex-1  bg-gray-100">
                {/* Header content */}
                <div className="m-4 rounded-lg"> <Header /></div>
                <div className="flex-1 m-2 p-6">
                    <main>
                        {Outlet}
                    </main></div>
            </div>
        </div>
    );
};
