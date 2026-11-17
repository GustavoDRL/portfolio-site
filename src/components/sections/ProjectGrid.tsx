'use client'; // Needed for state and effects

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

// Extract unique categories for filtering
const categories = [
  'All', 
  ...Array.from(new Set(projectsData.map(p => p.category)))
];

interface ProjectGridProps {
  // Home page: show only `featured` projects, without filters, plus a link to /projects
  featuredOnly?: boolean;
  title?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ featuredOnly = false, title }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const visible = projectsData.filter(project =>
      featuredOnly
        ? project.featured
        : selectedCategory === 'All' || project.category === selectedCategory
    );
    return [...visible].sort((a, b) => a.order - b.order);
  }, [featuredOnly, selectedCategory]);

  const heading = title ?? (featuredOnly ? 'Featured Projects' : 'All Projects');

  return (
    <section id="projects" className="py-16 md:py-24 bg-accent2">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-center text-primary mb-12">{heading}</h2>
        
        {/* Filter Buttons (full grid only) */}
        {!featuredOnly && (
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
        )}

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

        {featuredOnly && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primaryLight hover:text-primary transition-colors duration-300"
            >
              All projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid; 