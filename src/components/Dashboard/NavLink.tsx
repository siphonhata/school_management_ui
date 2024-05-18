

// Map of links to display in the side navigation.

import { Link } from "react-router-dom";

// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: "HomeIcon" },
    {
        name: 'Menus',
        href: '/dashboard/menus',
        icon: "UserGroupIcon",
    },
    { name: 'Customers', href: '/dashboard/customers', icon: "UserGroupIcon" },
    { name: 'Announcements', href: '/dashboard/announcements', icon: "UserGroupIcon" },
    { name: 'Staff', href: '/dashboard', icon: "UserGroupIcon" },
    // { name: 'Admin Profile', href: '/', icon: "UserGroupIcon" },
];

export const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        to={link.href}
                        // className={clsx(
                        //   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        //   {
                        //     'bg-sky-100 text-blue-600': pathname === link.href,
                        //   },
                        // )}
                        className='flex text-black h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
                    >
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}