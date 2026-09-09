import React from 'react';
import Layout from '@/components/layout/Layout';
import Expertise from '@/components/sections/Expertise';
import Timeline from '@/components/sections/Timeline';
import type { Metadata } from "next";
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: "About Gustavo Del Rio Lima | CTO & AI Systems Architect",
  description: "Explore the executive leadership, engineering background, and professional journey of Gustavo Del Rio Lima — Chief Technology Officer (CTO) and AI & Distributed Systems Architect.",
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