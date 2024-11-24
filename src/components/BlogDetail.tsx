import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
  const { slug } = useParams();
  // In a real app, we would fetch the post data based on the slug
  const post = {
    title: 'Machine Learning in Healthcare',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Machine Learning',
    content: '# Machine Learning in Healthcare\n\nThis is a sample blog post about machine learning in healthcare...',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };

  return (
    <article className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Latest Articles
          </Link>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), 'MMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogDetail;