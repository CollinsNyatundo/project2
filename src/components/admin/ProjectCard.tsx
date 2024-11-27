import React from 'react';
import { motion } from 'framer-motion';
import { Github, Edit, Trash2 } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    imageUrl: string;
    githubLink: string;
    documentation: string;
    icon: React.ComponentType;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.imageUrl}
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
          <p className="text-gray-400 mb-4">{project.documentation}</p>
        </div>
      </div>

      <div className="p-6 flex justify-between items-center">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <div className="flex gap-4">
          <button
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="Edit"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            className="text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;