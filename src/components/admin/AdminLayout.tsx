import React, { useState, useEffect } from 'react';
import { Outlet, Navigate, Link, useNavigate } from 'react-router-dom';
import { FileText, Settings, LogOut, Edit, Save } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const AdminLayout = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [editedContent, setEditedContent] = useState('');

  useEffect(() => {
    // Fetch blog posts when component mounts
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    // Replace this with your actual API call
    const response = await fetch('/api/blog-posts');
    const data = await response.json();
    setBlogPosts(data);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setEditedContent(post.content);
  };

  const handleSavePost = async () => {
    if (selectedPost) {
      // Replace this with your actual API call
      await fetch(`/api/blog-posts/${selectedPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...selectedPost, content: editedContent }),
      });

      // Update local state
      setBlogPosts(blogPosts.map(post =>
        post.id === selectedPost.id ? { ...post, content: editedContent } : post
      ));

      setSelectedPost(null);
      setEditedContent('');
    }
  };

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
      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-end px-6">
          <div className="flex items-center">
            <span className="text-gray-300 mr-4">{user.email}</span>
          </div>
        </div>
        <main className="flex-1 p-6 overflow-auto">
          {selectedPost ? (
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">{selectedPost.title}</h2>
              <textarea
                className="w-full h-64 p-2 bg-gray-700 text-white rounded-md"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSavePost}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <>
              <Outlet />
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Blog Posts</h2>
                <ul className="space-y-4">
                  {blogPosts.map((post) => (
                    <li key={post.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                      <span className="text-white">{post.title}</span>
                      <button
                        onClick={() => handleEditPost(post)}
                        className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;