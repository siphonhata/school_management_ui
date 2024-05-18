import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Dashboard } from '.';

export const DashboardLayout: React.FC = () => {
    const location = useLocation();

    const navItems = [
        { path: 'home', name: 'Home' },
        { path: 'profile', name: 'Profile' },
        { path: 'settings', name: 'Settings' },
    ];

    return (
        <div className="flex min-h-screen">
            {/* Side Navigation */}
            <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-2xl font-bold">Dashboard</div>
                <nav className="flex-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={`/dashboard/${item.path}`}
                            className={`block px-4 py-2 mt-2 rounded-lg ${
                                location.pathname === `/dashboard/${item.path}` ? 'bg-gray-900' : 'hover:bg-gray-700'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <header className="bg-white shadow p-4 mb-4">
                    <h1 className="text-xl font-semibold">Dashboard Header</h1>
                </header>
                <main>
                    <Dashboard />
                </main>
            </div>
        </div>
    );
};
