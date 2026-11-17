import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import ProjectGrid from '@/components/sections/ProjectGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects by Gustavo Del Rio Lima: LLM agents and RAG in production, autonomous robotics, clinical machine learning and hardware.',
};

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <ProjectGrid />
    </Layout>
  );
};

export default ProjectsPage;
