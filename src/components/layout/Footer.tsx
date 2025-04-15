import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi'; // Use Fi prefix for Feather Icons
import { SiMedium } from 'react-icons/si'; // Medium doesn't have a Feather icon, use Simple Icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  // IMPORTANT: Replace with your actual URLs
  const linkedinUrl = "https://www.linkedin.com/in/gustavodrl/"; 
  const githubUrl = "https://github.com/GustavoDRL"; // Add your GitHub URL
  const mediumUrl = "https://medium.com/@gustavodelrio"; 

  return (
    <footer className="bg-accent2 text-textDark py-6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p className="mb-4">&copy; {currentYear} Gustavo Del Rio Lima. All rights reserved.</p>
        <div className="flex justify-center items-center space-x-6">
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-textDark hover:text-primary transition-colors duration-200"
          >
            <FiLinkedin size={24} />
          </a>
          {/* Separator removed as icons are visually distinct */}
          <a 
            href={githubUrl} // Uncommented and using githubUrl
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-textDark hover:text-primary transition-colors duration-200"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href={mediumUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Medium Profile"
            className="text-textDark hover:text-primary transition-colors duration-200"
          >
            <SiMedium size={24} />
          </a>
          {/* Add GitHub link if desired */}
          {/* <span className="text-gray-400">|</span>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">GitHub</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 