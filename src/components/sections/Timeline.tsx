import React from 'react';
import { experienceData, ExperienceItem } from '@/data/experience';

// Helper function to format the period
const formatPeriod = (period: ExperienceItem['period']): string => {
  const startYear = period.start;
  const endYear = period.end === null ? 'Present' : period.end;
  return `${startYear} - ${endYear}`;
};

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-accent2">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-center text-primary mb-16">Professional Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primaryLight" aria-hidden="true"></div>

          {experienceData.sort((a, b) => parseInt(b.period.start) - parseInt(a.period.start)) // Sort descending by start year
            .map((item, index) => (
            <div key={index} className="mb-12 pl-10 relative">
              {/* Dot on the line */}
              <div className="absolute left-[10px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-accent2"></div>
              
              {/* Content Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <span className="text-sm font-medium text-primaryLight block mb-1">
                  {formatPeriod(item.period)}
                </span>
                <h3 className="text-xl font-semibold text-primary mb-1 font-heading">{item.role}</h3>
                <p className="text-md font-medium text-textDark mb-3">{item.company} <span className="text-sm text-gray-500">({item.category})</span></p>
                <p className="text-textDark font-body mb-4">{item.description}</p>
                
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-4">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="bg-accent1 text-primary text-xs font-medium px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 