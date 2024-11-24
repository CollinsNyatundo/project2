import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: 'Introduction to Machine Learning',
    excerpt: 'Explore the basics of machine learning and its applications in data science.',
    date: '2023-05-15',
    readTime: '5 min read',
    slug: 'intro-to-machine-learning',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Data Visualization Techniques',
    excerpt: 'Learn effective data visualization techniques to communicate insights.',
    date: '2023-05-22',
    readTime: '7 min read',
    slug: 'data-visualization-techniques',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Python for Data Analysis',
    excerpt: 'Discover how to use Python for efficient data analysis and manipulation.',
    date: '2023-05-29',
    readTime: '6 min read',
    slug: 'python-for-data-analysis',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const BlogCard = ({ post, index }: { post: typeof posts[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white hover:text-purple-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
            <Clock className="w-4 h-4 ml-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;