import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Project, Technology, ProjectLink } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard'; // For related projects
import { FiGithub, FiExternalLink, FiVideo, FiFileText } from 'react-icons/fi'; // Import icons

// Simple mapping for link icons
const LinkIcon = ({ type }: { type: ProjectLink['type'] }) => {
  const iconProps = { size: 18, className: "mr-2 flex-shrink-0" }; // Common props
  switch (type) {
    case 'github': return <FiGithub {...iconProps} aria-hidden="true" />;
    case 'video': return <FiVideo {...iconProps} aria-hidden="true" />;
    case 'live': return <FiExternalLink {...iconProps} aria-hidden="true" />;
    case 'paper': return <FiFileText {...iconProps} aria-hidden="true" />;
    default: return null;
  }
};

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, relatedProjects }) => {
  // Check if the featured media is a video
  const isVideo = project.featuredImage.match(/\.(mp4|webm|ogg)$/i);
  
  // Check if this is the weather monitoring project to use contain instead of cover
  const isWeatherProject = project.id === "weather-monitoring";
  const objectFitStyle = isWeatherProject ? "contain" : "cover";
  
  return (
    <article className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="inline-block bg-accent1 text-primary text-sm font-medium px-3 py-1 rounded mb-4">
            {project.category}
          </span>
          <h1 className="text-h1 font-bold text-primary mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Featured Image or Video */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-12 rounded-lg overflow-hidden shadow-lg">
          {isVideo ? (
            <video
              src={project.featuredImage}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              style={{ objectFit: objectFitStyle }}
              priority // Prioritize loading the main image
              placeholder="blur" 
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=" // Simple grey placeholder
            />
          )}
        </div>

        {/* Main Content Area (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Markdown Content */}
          <div className="lg:col-span-2 prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primaryLight">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>

          {/* Right Column: Tech Stack & Links */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Technologies Section */}
            <div>
              <h3 className="text-h3 text-textDark mb-4 border-b pb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech.name} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {tech.name} ({tech.category})
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section */}
            {project.links && project.links.length > 0 && (
              <div>
                <h3 className="text-h3 text-textDark mb-4 border-b pb-2">Project Links</h3>
                <ul className="space-y-2">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-primary hover:underline hover:text-primaryLight transition-colors duration-200 font-medium"
                      >
                        <LinkIcon type={link.type} />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* Optional: Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-h2 text-center text-primary mb-8">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((imgSrc, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                     placeholder="blur" 
                     blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=" // Simple grey placeholder
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects Section */}
        {relatedProjects && relatedProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t">
            <h2 className="text-h2 text-center text-primary mb-12">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};

export default ProjectDetail;
