

// Map of links to display in the side navigation.

import { Link } from "react-router-dom";

// Depending on the size of the application, this would be stored in a database.
const links = [
    { path: '/dashboard/home', name: 'Home', icon: 'iconanme' },
    { path: '/dashboard/profile', name: 'Profile', icon: 'iconanme' },
    { path: '/dashboard/settings', name: 'Settings', icon: 'iconanme' },
];

export const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        to={link.path}
                        className='flex text-black h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}