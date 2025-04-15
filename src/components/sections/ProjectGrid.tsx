'use client'; // Needed for state and effects

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projectsData } from '@/data/projects'; // Import data and type
import ProjectCard from '@/components/ui/ProjectCard';

// Extract unique categories for filtering
const categories = [
  'All', 
  ...Array.from(new Set(projectsData.map(p => p.category)))
];

const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projectsData.sort((a, b) => a.order - b.order);
    }
    return projectsData
      .filter(project => project.category === selectedCategory)
      .sort((a, b) => a.order - b.order);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent2">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-center text-primary mb-12">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${selectedCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-textDark hover:bg-primaryLight hover:text-primary'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout // Animate layout changes when filtering
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id} 
                layout // Ensure individual items also animate layout changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid; 