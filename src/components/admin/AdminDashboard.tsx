import { useAuthStore } from '../../stores/authStore';
import { PlusCircle, FileText, LogOut, Settings } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { signOut, user } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="flex-grow">
          <div className="px-6 pt-16 pb-8"> {/* Increased top padding */}
            <h1 className="text-2xl font-bold text-white mb-12">Admin Dashboard</h1> {/* Increased bottom margin */}
            <nav className="space-y-6">
              <Link
                to="/admin/posts/new"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <PlusCircle className="h-6 w-6 mr-3" />
                <span>New Post</span>
              </Link>
              <Link
                to="/admin/posts"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FileText className="h-6 w-6 mr-3" />
                <span>Manage Posts</span>
              </Link>
              <Link
                to="/admin/settings"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Settings className="h-6 w-6 mr-3" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-700">
          <button
            onClick={handleSignOut}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end h-16">
              <span className="text-gray-300 mr-4">{user?.email}</span>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-white mb-6">Welcome to the Admin Dashboard</h2>
            <p className="text-gray-300">Select an option from the sidebar to get started.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;