// Single source for the site's absolute base URL (sitemap, metadataBase, Open Graph, Twitter).
//
// Resolution order:
// 1. NEXT_PUBLIC_SITE_URL — explicit override (custom domain).
// 2. VERCEL_PROJECT_PRODUCTION_URL — set by Vercel on every deployment; it is the
//    production domain without protocol, so https:// is prepended.
// 3. http://localhost:3000 — local development only.
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, '');
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    const host = vercelProduction.replace(/^https?:\/\//, '').replace(/\/+$/, '');
    return `https://${host}`;
  }

  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl();

// Home headline; also rendered in the generated Open Graph image.
export const siteHeadline = 'AI Engineer — LLM agents, RAG & evals in production · CTO at Vanguarda';
