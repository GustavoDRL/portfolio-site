import { projectsData, Project } from '@/data/projects';
import ProjectDetail from '@/components/sections/ProjectDetail';
import Layout from '@/components/layout/Layout';
import { notFound } from 'next/navigation';
import type { Metadata } from "next"; // Import Metadata type

interface ProjectPageProps {
  params: { slug: string };
}

// Function to find project by slug
function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Define base URL for Open Graph images (consistent with layout.tsx)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Generate metadata for the page
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  // Check if the featured media is a video
  const isVideo = project.featuredImage.match(/\.(mp4|webm|ogg)$/i);

  // Construct image URL
  const imageUrl = project.featuredImage.startsWith('/') 
                   ? `${siteUrl}${project.featuredImage}` 
                   : project.featuredImage; // Assuming non-relative paths might exist

  // Create the metadata object
  const metadata: Metadata = {
    title: project.title, // Use template from RootLayout
    description: project.description,
    keywords: Array.from(new Set([project.category, ...project.tags])),
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${siteUrl}/projects/${project.slug}`,
      type: 'article', // Mark project pages as articles
      images: []
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: []
    },
  };

  // Only add images to OpenGraph if not a video
  if (!isVideo) {
    metadata.openGraph!.images = [
      {
        url: imageUrl,
        alt: project.title,
      },
    ];
    metadata.twitter!.images = [imageUrl];
  }

  return metadata;
}

// The actual page component
const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Trigger 404 page if project not found
  }

  // Find related projects (example: same category, excluding current one)
  const relatedProjects = projectsData.filter(
    (p) => p.category === project.category && p.id !== project.id
  ).slice(0, 3); // Limit to 3 related projects

  return (
    <Layout>
      <ProjectDetail project={project} relatedProjects={relatedProjects} />
    </Layout>
  );
};

export default ProjectPage; 