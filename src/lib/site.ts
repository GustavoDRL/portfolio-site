// Single source for the site's absolute base URL (sitemap, metadataBase, Open Graph, Twitter).
//
// Resolution order:
// 1. NEXT_PUBLIC_SITE_URL — explicit override (set it once a custom domain is live).
// 2. On Vercel, the known production URL. VERCEL_PROJECT_PRODUCTION_URL is not used:
//    it resolves to a custom domain registered on the project that has no DNS.
// 3. http://localhost:3000 — local development only.
const PRODUCTION_URL = 'https://portfolio-site-gustavodrls-projects.vercel.app';

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, '');
  }

  if (process.env.VERCEL) {
    return PRODUCTION_URL;
  }

  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl();

// Home headline; also rendered in the generated Open Graph image.
export const siteHeadline = 'AI Engineer — LLM agents, RAG & evals in production · CTO at Vanguarda';
