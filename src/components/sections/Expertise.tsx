import React from 'react';
import { skillsData, SkillCategory } from '@/data/skills';

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-h2 text-center text-primary mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-h3 text-primary mb-4 font-semibold border-b-2 border-primary/30 pb-2">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-textDark font-body">
                    {skill.name}
                    {/* Optionally display description or level here */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 