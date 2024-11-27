import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { FileText, Settings, LogOut, User, Briefcase } from 'lucide-react';

const AdminLayout = () => {
  const { user, signOut } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 fixed h-full overflow-y-auto">
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        </div>
        <div className="p-4 border-b border-gray-700">
          <Link
            to="/admin/profile"
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            <User className="w-5 h-5 mr-3" />
            {user.displayName || 'Admin'}
          </Link>
        </div>
        <nav className="p-4">
          <Link
            to="/admin/posts"
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            <FileText className="w-5 h-5 mr-3" />
            Posts
          </Link>
          <Link
            to="/admin/projects"
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md mt-2"
          >
            <Briefcase className="w-5 h-5 mr-3" />
            Projects
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md mt-2"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
          <button
            onClick={() => signOut()}
            className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md mt-2 w-full"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div
          className={`fixed top-0 left-64 right-0 h-16 flex items-center justify-end px-6 transition-all duration-300 ${
            isScrolled ? 'bg-transparent' : 'bg-gray-800 border-b border-gray-700'
          }`}
        >
          <div className="flex items-center">
            <span className={`mr-4 transition-all duration-300 ${isScrolled ? 'text-transparent' : 'text-gray-300'}`}>
              {user.email}
            </span>
          </div>
        </div>
        <main className="p-6 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;