'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBrain, FaArrowRight } from 'react-icons/fa';

const AboutPreview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about-preview" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image 
                src="/images/gustavoDelRio_perfil.jpeg" 
                alt="Gustavo Del Rio Lima" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            variants={containerVariants}
            className="w-full lg:w-2/3"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-h2 text-primary mb-6 text-center lg:text-left"
            >
              About Me
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg text-textDark mb-8 leading-relaxed text-center lg:text-left"
            >
              Instrumentation, Automation and Robotics Engineer with expertise in Full Stack Development, 
              specializing in Generative AI, machine learning, and advanced robotics applications. 
              I combine technical expertise with innovative problem-solving to create cutting-edge solutions.
            </motion.p>
            
            {/* Key Skills */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            >
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <FaBrain size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">AI</h3>
                  <p className="text-sm text-textDark">Generative AI & ML</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <FaCode size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Full Stack</h3>
                  <p className="text-sm text-textDark">Complete Solutions</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Robotics</h3>
                  <p className="text-sm text-textDark">Autonomous Systems</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primaryLight transition-colors duration-300 font-medium"
              >
                Learn More About Me
                <FaArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;