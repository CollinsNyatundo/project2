import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, LineChart, HeartPulse, Database, Film, Users, ExternalLink, Search, Grid, List } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReactTooltip from 'react-tooltip';

const projects = [
  {
    title: 'Customer Churn Analysis',
    description: 'Analyzed customer churn patterns using Python and machine learning algorithms to identify key factors affecting customer retention.',
    image: 'https://www.shutterstock.com/image-photo/customer-churn-shown-using-text-600nw-2443621059.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    icon: LineChart,
    github: 'https://github.com/CollinsNyatundo/BCG-customer-churn-visualization',
    category: 'Data Analysis'
  },
  {
    title: 'Revenue Analysis Dashboard',
    description: 'Built an interactive dashboard for historical revenue analysis using Power BI and SQL for data processing.',
    image: 'https://www.shutterstock.com/shutterstock/videos/3495967415/thumb/12.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'SQL', 'Data Visualization'],
    icon: Database,
    github: 'https://github.com/CollinsNyatundo/Analyzing-Historical-Revenue-Data-and-Building-a-Dashboard',
    category: 'Data Visualization'
  },
  {
    title: 'Heart Disease Classification',
    description: 'Developed a machine learning model to predict heart disease using various classification algorithms.',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Classification'],
    icon: HeartPulse,
    github: 'https://github.com/CollinsNyatundo/Heart-Disease-Classification',
    category: 'Machine Learning'
  },
  {
    title: 'Best Streaming Service Analysis',
    description: 'Analyzed various streaming services to determine the best option based on content, pricing, and user satisfaction.',
    image: 'https://creatorsfortheculture.com/wp-content/uploads/2020/03/IMG_8921-1024x1024.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Data Analysis', 'Visualization'],
    icon: Film,
    github: 'https://github.com/CollinsNyatundo/Best-Streaming-Service-Analysis',
    category: 'Data Analysis'
  },
  {
    title: 'Bank Customer Segmentation',
    description: 'Implemented customer segmentation for a bank using clustering algorithms to personalize marketing strategies and improve customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Machine Learning', 'Clustering'],
    icon: Users,
    github: 'https://github.com/CollinsNyatundo/Bank-Customer-Segmentation-and-Personalization',
    category: 'Machine Learning'
  }
];

const ProjectCard = ({ project, index, onViewMore }: { project: typeof projects[0]; index: number; onViewMore: (project: typeof projects[0]) => void }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <LazyLoadImage
          src={project.image}
          alt={`Image for ${project.title}`}
          effect="blur"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e: any) => (e.target.src = '/path/to/fallback-image.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <Icon className="absolute bottom-4 left-4 w-8 h-8 text-white" data-tip={project.category} />
        <ReactTooltip />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <button
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            onClick={() => onViewMore(project)}
            aria-label={`View more details about ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            View More
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const categories = ['All', 'Data Analysis', 'Data Visualization', 'Machine Learning'];

  const filteredProjects = projects
    .filter(project => filter === 'All' || project.category === filter)
    .filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const handleViewMore = useCallback((project: typeof projects[0]) => {
    // Implement modal or navigation to project details page
    console.log('View more:', project);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                aria-label="Search projects"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="ml-4 text-gray-400 hover:text-white transition-colors"
              aria-label={`Switch to ${isGridView ? 'list' : 'grid'} view`}
            >
              {isGridView ? <List /> : <Grid />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className={`${isGridView ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} onViewMore={handleViewMore} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            No projects found for the selected category or search term.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;