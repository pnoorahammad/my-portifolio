import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaTimes, FaLayerGroup, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { SectionHeader } from '../ui/SectionHeader';
import { projects, Project } from '../../data/projects';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Extract unique categories
  const allCategories = ['All', ...Array.from(new Set(projects.flatMap(p => p.category)))];
  
  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="Featured" highlight="Projects" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.slice(0, 7).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 text-muted hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] border border-white/5 hover:border-primary/30 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  {/* Top Icons */}
                  <div className="absolute top-4 right-4 z-20 flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors hover:scale-110 transform">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-colors hover:scale-110 transform">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-primary mb-3">
                    <FaFolder />
                    <span className="text-xs font-semibold tracking-wider uppercase">{project.category[0]}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted text-sm mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs text-muted font-mono">
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted font-mono">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card relative w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 border border-white/10 shadow-2xl flex flex-col md:flex-row rounded-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-primary transition-colors z-20"
              >
                <FaTimes />
              </button>

              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background to-transparent md:to-transparent via-background/60 md:via-background/80"></div>
              </div>

              <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <FaFolder />
                  <span className="text-xs font-semibold tracking-wider uppercase">{selectedProject.category[0]}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-6">
                  {selectedProject.architecture && (
                    <div>
                      <h4 className="flex items-center gap-2 text-white font-semibold mb-2">
                        <FaLayerGroup className="text-secondary" /> Architecture
                      </h4>
                      <p className="text-muted text-sm">{selectedProject.architecture}</p>
                    </div>
                  )}

                  {selectedProject.features && (
                    <div>
                      <h4 className="flex items-center gap-2 text-white font-semibold mb-2">
                        <FaCheckCircle className="text-green-400" /> Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.features.map(f => (
                          <li key={f} className="text-muted text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.challenges && (
                    <div>
                      <h4 className="flex items-center gap-2 text-white font-semibold mb-2">
                        <FaExclamationTriangle className="text-yellow-400" /> Challenges Overcome
                      </h4>
                      <p className="text-muted text-sm">{selectedProject.challenges}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-sm font-medium">
                      <FaGithub size={16} /> Source Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white transition-colors text-sm font-medium shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
