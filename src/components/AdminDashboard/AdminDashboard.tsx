import { HomeIcon, UserGroupIcon, UserIcon, BookOpenIcon, ClipboardIcon, AcademicCapIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { Dashboard, DashboardLayout } from "../Dashboard"
import { ProfilePage } from "../Profile";
import { Routes, Route } from "react-router-dom";

const navItems = [
    { path: 'dashboard', name: 'Dashboard', icon: <HomeIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'profile', name: 'Profile', icon: <CreditCardIcon className="h-5 w-5" />, Component: <><ProfilePage /> </> },
    { path: 'students', name: 'Students', icon: <UserGroupIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'teachers', name: 'Teachers', icon: <UserIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'attendance', name: 'Attendance', icon: <ClipboardIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'courses', name: 'Courses', icon: <BookOpenIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'exams', name: 'Exams', icon: <AcademicCapIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },
    { path: 'payments', name: 'Payments', icon: <CreditCardIcon className="h-5 w-5" />, Component: <h1>Home Component</h1> },

];

export const AdminDashboard = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout navItems={navItems} />}>
                {navItems.map((item) => (
                    <Route key={item.path} path={item.path} element={item.Component} />
                ))}
            </Route>
        </Routes>
    );
}