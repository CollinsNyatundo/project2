import React from 'react';
import { motion } from 'framer-motion';
import { Github, LineChart, HeartPulse, Database, Film } from 'lucide-react';

const projects = [
  {
    title: 'Customer Churn Analysis',
    description: 'Analyzed customer churn patterns using Python and machine learning algorithms to identify key factors affecting customer retention.',
    image: 'https://www.shutterstock.com/image-photo/customer-churn-shown-using-text-600nw-2443621059.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    icon: LineChart,
    github: 'https://github.com/CollinsNyatundo/BCG-customer-churn-visualization'
  },
  {
    title: 'Revenue Analysis Dashboard',
    description: 'Built an interactive dashboard for historical revenue analysis using Power BI and SQL for data processing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Power BI', 'SQL', 'Data Visualization'],
    icon: Database,
    github: 'https://github.com/CollinsNyatundo/Analyzing-Historical-Revenue-Data-and-Building-a-Dashboard'
  },
  {
    title: 'Heart Disease Classification',
    description: 'Developed a machine learning model to predict heart disease using various classification algorithms.',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Classification'],
    icon: HeartPulse,
    github: 'https://github.com/CollinsNyatundo/Heart-Disease-Classification'
  },
  {
    title: 'Best Streaming Service Analysis',
    description: 'Analyzed various streaming services to determine the best option based on content, pricing, and user satisfaction.',
    image: 'https://creatorsfortheculture.com/wp-content/uploads/2020/03/IMG_8921-1024x1024.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Data Analysis', 'Visualization'],
    icon: Film,
    github: 'https://github.com/CollinsNyatundo/Best-Streaming-Service-Analysis'
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`Image for ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => (e.currentTarget.src = 'path/to/fallback-image.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <Icon className="absolute bottom-4 left-4 w-8 h-8 text-white" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

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
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
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
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;