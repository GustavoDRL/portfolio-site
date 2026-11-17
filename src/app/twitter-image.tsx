import OpengraphImage from './opengraph-image';
import { siteHeadline } from '@/lib/site';

// Same card as opengraph-image.tsx, exposed as twitter:image.
export const alt = `Gustavo Del Rio Lima, ${siteHeadline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default OpengraphImage;
