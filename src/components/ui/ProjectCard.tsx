'use client'; // Add this directive for Framer Motion usage

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects'; // Import the Project type

interface ProjectCardProps {
  project: Project;
  index: number; // For staggered animation
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  
  // Define cardVariants inside the component
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02, // Slightly reduce scale effect
      y: -5,       // Add a subtle lift effect
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.12)", // Adjust shadow slightly
      transition: { duration: 0.25, ease: "easeOut" } // Slightly faster transition
    }
  };

  // Check if the featured media is a video
  const isVideo = project.featuredImage.match(/\.(mp4|webm|ogg)$/i);
  
  // Check if this is the weather monitoring project to use contain instead of cover
  const isWeatherProject = project.id === "weather-monitoring";
  const objectFitStyle = isWeatherProject ? "contain" : "cover";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative w-full h-48 sm:h-56 md:h-64">
          {isVideo ? (
            <video
              src={project.featuredImage}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              style={{ objectFit: objectFitStyle }}
              className="transition-transform duration-300 group-hover:scale-105"
              // Add placeholder blur effect if needed
              placeholder="blur" 
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=" // Simple grey placeholder
            />
          )}
        </div>
        <div className="p-4 md:p-5">
          <span className="inline-block bg-accent1 text-primary text-xs font-medium px-2 py-1 rounded mb-2">
            {project.category}
          </span>
          <h3 className="text-lg md:text-xl font-semibold font-heading text-textDark mb-1 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 font-body line-clamp-2">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard; 