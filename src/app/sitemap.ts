import { MetadataRoute } from 'next'
import { projectsData } from '@/data/projects';

// Define the expected type for changeFrequency explicitly
type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Static pages with explicit type casting for changeFrequency
  const staticPages = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFrequency,
      priority: 0.5,
    },
  ];

  // Dynamic project pages with explicit type casting
  const projectPages = projectsData.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(), // Ideally, use a real lastModified date if available
    changeFrequency: 'yearly' as ChangeFrequency, // Assuming projects don't change often
    priority: 0.7,
  }));

  // The return type is implicitly inferred correctly now
  return [
    ...staticPages,
    ...projectPages,
  ];
} 