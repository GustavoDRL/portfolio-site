"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBrain, FaUsers } from 'react-icons/fa';

const AboutContent: React.FC = () => {
  // Animation variants
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
    <>
      {/* Modern About Me Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent2/30 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div className="relative h-72 w-72 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                <Image 
                  src="/images/gustavoDelRio_perfil.jpeg" 
                  alt="Gustavo Del Rio Lima" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
            
            {/* About Me Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-2/3"
            >
              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                About Me
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-textDark mb-8 leading-relaxed max-w-3xl">
                Instrumentation, Automation and Robotics Engineer with expertise in Full Stack Development, 
                specializing in Generative AI, machine learning, and advanced robotics applications. 
                With a proven track record in competitive robotics and team leadership, I combine technical 
                expertise with innovative problem-solving to create cutting-edge solutions.
              </motion.p>
              
              <motion.div 
                variants={containerVariants} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
              >
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FaRobot size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Robotics Specialist</h3>
                    <p className="text-textDark">Specializing in autonomous systems, control algorithms, and robotic integration</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FaBrain size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">AI Engineer</h3>
                    <p className="text-textDark">Developing intelligent solutions with Generative AI and machine learning</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FaCode size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Full Stack Developer</h3>
                    <p className="text-textDark">Creating complete digital solutions with modern web technologies</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <FaUsers size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">Team Leader</h3>
                    <p className="text-textDark">Experienced in leading technical teams to achieve exceptional results</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">My Philosophy</h2>
            <p className="text-lg text-textDark mb-8 leading-relaxed">
              I believe in the transformative power of technology to solve complex real-world problems. 
              My approach combines innovation through integration, collaborative development, and 
              continuous growth to create solutions that make a meaningful impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-textDark">Combining robotics and AI to create more intelligent and adaptable systems</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Collaboration</h3>
                <p className="text-textDark">Embracing open-source principles and community-driven development</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-3">Growth</h3>
                <p className="text-textDark">Commitment to lifelong learning and staying at the forefront of technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-accent2/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Leadership Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">Team Leadership</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-textDark">Led and managed a team of 52 members (2023-2024)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-textDark">Successfully directed a 15-member team (2022)</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-textDark">Oversaw delivery of 12 projects across 4 distinct categories</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-textDark">Demonstrated exceptional sportsmanship through knowledge sharing and cross-team collaboration</p>
                  </li>
                </ul>
              </motion.div>
              
              {/* Competition Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">Competition Success</h3>
                <p className="text-textDark mb-4">Earned 9 competitive achievements with 5 trophies as primary project developer and 4 as team leader.</p>
                <p className="text-textDark font-semibold mb-2">Active participation in:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">IEEE LARS and SBR 2023</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Iron Cup (2022-2024)</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">RoboChallenge (2022-2023)</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">RCX 2023</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">RSM Challenge (2021-2023)</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HACKTUDO 2021</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Education</h2>
            
            <div className="space-y-8">
              {/* Academic Degrees */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1">Bachelor&apos;s Degrees</h3>
                    <p className="text-textDark font-medium">Federal University of ABC (UFABC)</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm whitespace-nowrap font-medium">2018-2025</span>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm whitespace-nowrap font-medium">2018-2023</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-primary/50">
                    <h4 className="text-lg font-semibold text-primary mb-1">Instrumentation, Automation and Robotics Engineering</h4>
                    <p className="text-textDark">Focus on robotics, control systems, and automation (2018-2025)</p>
                  </div>
                  
                  <div className="pl-4 border-l-2 border-primary/50">
                    <h4 className="text-lg font-semibold text-primary mb-1">Science and Technology</h4>
                    <p className="text-textDark">Foundation in mathematics, physics, and engineering principles (2018-2023)</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Professional Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-accent"
              >
                <h3 className="text-2xl font-semibold text-primary mb-6">Professional Courses and Certifications</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3 pb-1 border-b border-primary/30">ROS2 Specialization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">ROS2 Nav2 [Navigation 2 Stack] with SLAM and Navigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">ROS2 For Beginners (ROS Foxy, Humble - 2025)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">ROS2 for Beginners Level 2 - TF, URDF, RViz & Gazebo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-3 pb-1 border-b border-primary/30">AI and LLM Development</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">ChatGPT Prompt Engineering for Developers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">LangChain for LLM Application Development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">Preprocessing Unstructured Data for LLM Applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span className="text-textDark">Multi AI Agent Systems with crewAI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-primaryLight"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">Languages</h3>
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <span className="text-lg font-bold">PT</span>
                    </div>
                    <p className="text-textDark font-medium">Portuguese</p>
                    <p className="text-sm text-textDark">Fluent</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <span className="text-lg font-bold">EN</span>
                    </div>
                    <p className="text-textDark font-medium">English</p>
                    <p className="text-sm text-textDark">Advanced</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <span className="text-lg font-bold">ES</span>
                    </div>
                    <p className="text-textDark font-medium">Spanish</p>
                    <p className="text-sm text-textDark">Advanced</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutContent; 