import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import ProjectGrid from '@/components/sections/ProjectGrid'; // Import ProjectGrid

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <ProjectGrid /> {/* Add ProjectGrid component */}
      {/* Remove placeholder */}
      {/* 
      <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-h2 mb-8">Projects Section Placeholder</h2>
          <p>The project grid will go here in Round 2.</p>
      </div> 
      */}
    </Layout>
  );
} 