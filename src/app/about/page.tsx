import React from 'react';
import Layout from '@/components/layout/Layout';
import Expertise from '@/components/sections/Expertise';
import Timeline from '@/components/sections/Timeline';
import type { Metadata } from "next";
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: "About Gustavo Del Rio Lima | AI & Robotics",
  description: "Explore the skills, experience, and professional journey of Gustavo Del Rio Lima, specialist in AI and Robotics engineering with expertise in full stack development.",
};

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutContent />
      <Expertise />
      <Timeline />
    </Layout>
  );
};

export default AboutPage; 