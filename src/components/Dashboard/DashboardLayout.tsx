import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Dashboard, Header } from '.';

export const DashboardLayout: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: 'home', name: 'Home' },
        { path: 'profile', name: 'Profile' },
        { path: 'settings', name: 'Settings' },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col rounded-lg m-2 mr-0">
                <div className="p-4 text-2xl font-bold">Dashboard</div>
                <nav className="flex-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={`/dashboard/${item.path}`}
                            className={`block px-4 py-2 mt-2 rounded-lg ${location.pathname === `/dashboard/${item.path}` ? 'bg-gray-900' : 'hover:bg-gray-700'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1  bg-gray-100">
                {/* Header content */}
                <div className="m-4 rounded-lg"> <Header /></div>
                <div className="flex-1 m-2 p-6">
                    <main>
                        <Dashboard />
                    </main></div>
            </div>
        </div>
    );
};
