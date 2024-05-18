import { Dashboard, DashboardLayout } from "../Dashboard"

const navItems = [
    { path: 'home', name: 'Home' },
    { path: 'profile', name: 'Profile' },
    { path: 'settings', name: 'Settings' },
];

export const AdminDashboard = () => {
    return (
        <DashboardLayout Outlet={<Dashboard />} navItems={navItems} />
    )
}