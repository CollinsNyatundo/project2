import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, FileText, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { signOut, user } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300 mr-4">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-300 hover:text-white"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate('/admin/posts/new')}
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <PlusCircle className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-medium text-white">New Post</h3>
              <p className="mt-2 text-gray-400">Create a new blog post</p>
            </button>

            <button
              onClick={() => navigate('/admin/posts')}
              className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FileText className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-medium text-white">Manage Posts</h3>
              <p className="mt-2 text-gray-400">Edit or delete existing posts</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;