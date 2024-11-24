import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { FileText, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const AdminLayout = () => {
  const { user, signOut } = useAuthStore();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="h-16 flex items-center px-6 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
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
      <div className="flex-1">
        <div className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-end px-6">
          <div className="flex items-center">
            <span className="text-gray-300 mr-4">{user.email}</span>
          </div>
        </div>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;