import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '.';
import { 
  ArrowRightStartOnRectangleIcon, 
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/solid';
import { useFetchUser } from '../Common';

interface CollapsibleSectionProps {
  title: string;
  items: any[];
  isOpen: boolean;
  onToggle: () => void;
  currentPath: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  items,
  isOpen,
  onToggle,
  currentPath
}) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 rounded-lg"
      >
        <span className="font-medium uppercase">{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4" />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </button>
      {isOpen && (
        <div className="mt-1 space-y-1">
          {items.map((item) => (
            <Link
              key={item.path}
              to={`/dashboard/${item.path}`}
              className={`flex items-center px-4 py-2 mx-2 rounded-lg ${
                currentPath === `/dashboard/${item.path}`
                  ? 'bg-white text-gray-900'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const DashboardLayout: React.FC<any> = ({ Outlet, navItems }) => {
  const location = useLocation();
  const { user, loading } = useFetchUser();

  // Group nav items by category
  const groupedNavItems = navItems.reduce((acc: any, item: any) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // State to track which sections are open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Initially open the section that contains the current path
    const currentCategory = navItems.find(
      (item: any) => `/dashboard/${item.path}` === location.pathname
    )?.category;
    
    return Object.keys(groupedNavItems).reduce((acc: Record<string, boolean>, category: string) => {
      acc[category] = category === currentCategory;
      return acc;
    }, {});
  });

  const toggleSection = (category: string) => {
    setOpenSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Navigation */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col rounded-lg m-2 mr-0 fixed top-0 bottom-0">
        <div className="p-4">
          <h1 className="text-xl font-bold truncate">
            {loading ? "Loading..." : user?.school.name}
          </h1>
        </div>
        <hr className="border-gray-700 mx-4 mb-2" />
        
        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-2">
          {/* Main items without collapsible section */}
          {groupedNavItems['Main']?.map((item: any) => (
            <Link
              key={item.path}
              to={`/dashboard/${item.path}`}
              className={`flex items-center px-4 py-2 mb-1 rounded-lg ${
                location.pathname === `/dashboard/${item.path}`
                  ? 'bg-white text-gray-900'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}

          <hr className="border-gray-700 my-2" />

          {/* Other sections as collapsible */}
          {Object.entries(groupedNavItems).map(([category, items]: [string, any]) => (
            category !== 'Main' && (
              <CollapsibleSection
                key={category}
                title={category}
                items={items}
                isOpen={openSections[category]}
                onToggle={() => toggleSection(category)}
                currentPath={location.pathname}
              />
            )
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="mt-auto p-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 text-gray-300"
          >
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
            <span className="ml-3">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 pt-16">
        <div className="bg-gray-100 m-4 rounded-lg fixed top-0 left-64 right-0 z-10">
          <Header />
        </div>
        <div className="bg-gray-100 flex-1 m-2 p-6 overflow-y-auto">
          <main>{Outlet}</main>
        </div>
      </div>
    </div>
  );
};