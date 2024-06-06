import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '.'
import { logout } from '../../utils'



export const SideNavigation = () => {
    return (
        <div className="flex bg-white shadow-md h-full flex-col px-2 md:px-2">
            <Link
                className="mb-2 flex rounded-md p-4 md:h-40 text-blue-800 font-extrabold "
                to="/"
            >
                Company Logo
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form>
                    <button onClick={logout} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        {/* <PowerIcon className="w-6" /> */}
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}

