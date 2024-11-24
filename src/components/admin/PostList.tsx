import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus } from 'lucide-react';
import { format } from 'date-fns';

const posts = [
  {
    id: 'ml-healthcare-2024-04-15',
    title: 'Machine Learning in Healthcare',
    excerpt: 'Exploring how machine learning is revolutionizing healthcare through predictive analytics, personalized treatment plans, medical imaging, and more.',
    date: '2024-04-15',
    category: 'Machine Learning',
    published: true
  },
  {
    id: 'ds-best-practices-2024-04-10',
    title: 'Data Science Best Practices',
    excerpt: 'Key principles and best practices for building robust and maintainable data science projects, covering data management, code organization, reproducibility, and more.',
    date: '2024-04-10',
    category: 'Data Science',
    published: true
  },
  {
    id: 'power-bi-dashboard-2024-04-05',
    title: 'Power BI Dashboard Design',
    excerpt: 'Tips and techniques for creating effective and visually appealing Power BI dashboards, including layout planning, color schemes, data visualization selection, and interactivity.',
    date: '2024-04-05',
    category: 'Data Visualization',
    published: true
  }
];

const PostList = () => {
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // Handle delete logic here
      console.log('Deleting post:', id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <Link
            to="/admin/posts/new"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-700/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">{post.title}</div>
                    <div className="text-sm text-gray-400">{post.excerpt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.published
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to={`/admin/posts/${post.id}/edit`}
                      className="text-purple-400 hover:text-purple-300 mx-2"
                    >
                      <Edit className="w-5 h-5 inline" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-400 hover:text-red-300 mx-2"
                    >
                      <Trash2 className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostList;