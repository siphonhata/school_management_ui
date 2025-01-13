import { HomeIcon, UserGroupIcon, UserIcon, BookOpenIcon, ClipboardIcon, AcademicCapIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { Dashboard, DashboardLayout } from "../Dashboard"
import { ProfilePage } from "../Profile";
import { TeachersComponent } from "./TeacherManagement/Teachers";
import { PaymentComponent } from "./Payment";
import { HomeAdmin } from "./Home";
import StudentsList from "./StudentsManagement/Students";
import AttendanceDashboard from "./AttendanceManagement/Attendance";
import { ClassManagement } from "./ClassManagement";
import { ExamManagement } from "./ExamManagement";

const navItems = [
    { path: 'dashboard', name: 'Dashboard', icon: <HomeIcon className="h-5 w-5" />, Component: <><HomeAdmin /> </> },
    { path: 'profile', name: 'Profile', icon: <CreditCardIcon className="h-5 w-5" />, Component: <><ProfilePage /> </> },
    { path: 'students', name: 'Students', icon: <UserGroupIcon className="h-5 w-5" />, Component: <><StudentsList /></> },
    { path: 'teachers', name: 'Teachers', icon: <UserIcon className="h-5 w-5" />, Component: <><TeachersComponent /></> },
    { path: 'attendance', name: 'Attendance', icon: <ClipboardIcon className="h-5 w-5" />, Component: <><AttendanceDashboard /></> },
    { path: 'courses', name: 'Courses', icon: <BookOpenIcon className="h-5 w-5" />, Component: <><ClassManagement /></> },
    { path: 'exams', name: 'Exams', icon: <AcademicCapIcon className="h-5 w-5" />, Component: <><ExamManagement /></> },
    { path: 'payments', name: 'Payments', icon: <CreditCardIcon className="h-5 w-5" />, Component: <><PaymentComponent /></> },
];

export const AdminDashboard = () => {
    return (
        <DashboardLayout Outlet={<Dashboard navItems={navItems} />} navItems={navItems} />
    )
}
