'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { FaCode, FaCogs, FaBrain, FaRocket } from 'react-icons/fa';

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Programming Languages": <FaCode size={24} />,
  "Technologies & Frameworks": <FaCogs size={24} />,
  "AI & Data": <FaBrain size={24} />,
  "Core Skills": <FaRocket size={24} />,
};

const Expertise: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="expertise" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 text-primary mb-4">Technical Expertise</h2>
          <p className="text-lg text-textDark max-w-2xl mx-auto">
            A toolkit built through years of hands-on experience in AI, software development and robotics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {skillsData.map((category) => {
            const icon = categoryIcons[category.title] || <FaCode size={24} />;

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="bg-accent1 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
