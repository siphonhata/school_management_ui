import { Dashboard, DashboardLayout } from "../Dashboard"
import { ProfilePage } from "../Profile";
import { TeachersComponent } from "./TeacherManagement/Teachers";
import { PaymentComponent } from "./Payment";
import { HomeAdmin } from "./Home";
import StudentsList from "./StudentsManagement/Students";
import AttendanceDashboard from "./AttendanceManagement/Attendance";
import { ClassManagement } from "./ClassManagement";
import { ExamManagement } from "./ExamManagement";

// Keep your existing imports and add these new ones
import { 
    HomeIcon, 
    UserGroupIcon, 
    UserIcon, 
    BookOpenIcon, 
    ClipboardIcon, 
    AcademicCapIcon, 
    CreditCardIcon,
    CalendarIcon,
    BookmarkIcon,
    TruckIcon,
    CubeIcon,
    CalendarDaysIcon,
    ChatBubbleLeftIcon,
    UsersIcon,
    ChartBarIcon,
    DocumentIcon,
    Cog6ToothIcon
  } from "@heroicons/react/24/solid";
import { TimetableManagement } from "./TimeTableManagement";
import { StaffManagement } from "./StaffManagement";
import { LibraryManagement } from "./LibraryManagement";
  
  // Group your navigation items
  const navItems = [
    // Main
    { path: 'dashboard', name: 'Dashboard', icon: <HomeIcon className="h-5 w-5" />, Component: <HomeAdmin />, category: 'Main' },
    { path: 'profile', name: 'Profile', icon: <UserIcon className="h-5 w-5" />, Component: <ProfilePage />, category: 'Main' },
    
    // Academic
    { path: 'students', name: 'Students', icon: <UserGroupIcon className="h-5 w-5" />, Component: <StudentsList />, category: 'Academic' },
    { path: 'teachers', name: 'Teachers', icon: <UserIcon className="h-5 w-5" />, Component: <TeachersComponent />, category: 'Academic' },
    { path: 'courses', name: 'Courses', icon: <BookOpenIcon className="h-5 w-5" />, Component: <ClassManagement />, category: 'Academic' },
    { path: 'exams', name: 'Exams', icon: <AcademicCapIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Academic' },
    { path: 'timetable', name: 'Timetable', icon: <CalendarIcon className="h-5 w-5" />, Component: <TimetableManagement />, category: 'Academic' },
  
    // Administration
    { path: 'attendance', name: 'Attendance', icon: <ClipboardIcon className="h-5 w-5" />, Component: <AttendanceDashboard />, category: 'Administration' },
    { path: 'staff', name: 'Staff', icon: <UsersIcon className="h-5 w-5" />, Component: <StaffManagement />, category: 'Administration' },
    // { path: 'documents', name: 'Documents', icon: <DocumentIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Administration' },
    // { path: 'inventory', name: 'Inventory', icon: <CubeIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Administration' },
  
    // Facilities
    { path: 'library', name: 'Library', icon: <BookmarkIcon className="h-5 w-5" />, Component: <LibraryManagement />, category: 'Facilities' },
    { path: 'transport', name: 'Transport', icon: <TruckIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Facilities' },
  
    // Communication
    { path: 'communications', name: 'Messages', icon: <ChatBubbleLeftIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Communication' },
    { path: 'events', name: 'Events', icon: <CalendarDaysIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Communication' },
  
    // Finance
    { path: 'payments', name: 'Payments', icon: <CreditCardIcon className="h-5 w-5" />, Component: <PaymentComponent />, category: 'Finance' },
    { path: 'reports', name: 'Reports', icon: <ChartBarIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'Finance' },
  
    // System
    { path: 'settings', name: 'Settings', icon: <Cog6ToothIcon className="h-5 w-5" />, Component: <ExamManagement />, category: 'System' }
  ];

export const AdminDashboard = () => {
    return (
        <DashboardLayout Outlet={<Dashboard navItems={navItems} />} navItems={navItems} />
    )
}
