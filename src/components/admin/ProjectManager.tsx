import React, { useState } from 'react';
import { Plus, Edit, Trash2, LineChart, Database, HeartPulse, Film, Users } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  githubLink: string;
  documentation: string;
  excerpt: string;
  icon: React.ComponentType;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Analysis',
    imageUrl: 'https://www.shutterstock.com/image-photo/customer-churn-shown-using-text-600nw-2443621059.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    githubLink: 'https://github.com/CollinsNyatundo/BCG-customer-churn-visualization',
    documentation: 'Analyzed customer churn patterns using Python and machine learning algorithms to identify key factors affecting customer retention.',
    icon: LineChart,
    excerpt: 'Analysis of customer churn patterns.',
  },
  {
    id: '2',
    title: 'Revenue Analysis Dashboard',
    imageUrl: 'https://www.shutterstock.com/shutterstock/videos/3495967415/thumb/12.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    githubLink: 'https://github.com/CollinsNyatundo/Analyzing-Historical-Revenue-Data-and-Building-a-Dashboard',
    documentation: 'Built an interactive dashboard for historical revenue analysis using Power BI and SQL for data processing.',
    icon: Database,
    excerpt: 'An interactive dashboard for revenue analysis.',
  },
  {
    id: '3',
    title: 'Heart Disease Classification',
    imageUrl: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    githubLink: 'https://github.com/CollinsNyatundo/Heart-Disease-Classification',
    documentation: 'Developed a machine learning model to predict heart disease using various classification algorithms.',
    icon: HeartPulse,
    excerpt: 'A model to predict heart disease.',
  },
  {
    id: '4',
    title: 'Best Streaming Service Analysis',
    imageUrl: 'https://creatorsfortheculture.com/wp-content/uploads/2020/03/IMG_8921-1024x1024.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    githubLink: 'https://github.com/CollinsNyatundo/Best-Streaming-Service-Analysis',
    documentation: 'Analyzed various streaming services to determine the best option based on content, pricing, and user satisfaction.',
    icon: Film,
    excerpt: 'Analysis of streaming services.',
  },
  {
    id: '5',
    title: 'Bank Customer Segmentation',
    imageUrl: 'https://st2.depositphotos.com/4428871/9888/i/450/depositphotos_98881588-stock-photo-customer-word-cloud.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    githubLink: 'https://github.com/CollinsNyatundo/Bank-Customer-Segmentation-and-Personalization',
    documentation: 'Implemented customer segmentation for a bank using clustering algorithms to personalize marketing strategies and improve customer satisfaction.',
    icon: Users,
    excerpt: 'Customer segmentation for banks.',
  }
];

const ProjectManager = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  const handleAddProject = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjectToDelete(id);
    setIsDeleteConfirmOpen(true);
  };

  const confirmDeleteProject = () => {
    if (projectToDelete) {
      setProjects(projects.filter(project => project.id !== projectToDelete));
      setIsDeleteConfirmOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      setProjects(projects.map(p => p.id === project.id ? project : p));
    } else {
      setProjects([...projects, { ...project, id: Date.now().toString() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">Project Manager</h1>
          <button
            onClick={handleAddProject}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Project
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
            />
          ))}
        </motion.div>

        {isModalOpen && (
          <ProjectModal
            project={editingProject}
            onSave={handleSaveProject}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        {isDeleteConfirmOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold text-white mb-4">Confirm Delete</h2>
              <p className="text-gray-300 mb-4">Are you sure you want to delete this project?</p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsDeleteConfirmOpen(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  No
                </button>
                <button
                  onClick={confirmDeleteProject}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onSave: (project: Project) => void;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onSave, onClose }) => {
  const [title, setTitle] = useState(project?.title || '');
  const [excerpt, setExcerpt] = useState(project?.excerpt || '');
  const [imageUrl, setImageUrl] = useState(project?.imageUrl || '');
  const [githubLink, setGithubLink] = useState(project?.githubLink || '');
  const [documentation, setDocumentation] = useState(project?.documentation || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: project?.id || Date.now().toString(),
      title,
      excerpt,
      imageUrl,
      githubLink,
      documentation,
      icon: project?.icon || LineChart,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">
          {project ? 'Edit Project' : 'Add New Project'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-300 mb-1">
              Excerpt
            </label>
            <input
              type="text"
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-300 mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="githubLink" className="block text-sm font-medium text-gray-300 mb-1">
              GitHub Link
            </label>
            <input
              type="url"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="documentation" className="block text-sm font-medium text-gray-300 mb-1">
              Documentation
            </label>
            <textarea
              id="documentation"
              value={documentation}
              onChange={(e) => setDocumentation(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManager;