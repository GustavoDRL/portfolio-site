import { ImageResponse } from 'next/og';
import { siteHeadline } from '@/lib/site';

// Share card generated at build time (Open Graph); twitter-image.tsx reuses it.
// Colors follow the Tailwind design system in tailwind.config.ts.
export const alt = `Gustavo Del Rio Lima, ${siteHeadline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          backgroundColor: '#F9FFFB',
          borderLeft: '24px solid #5A7D6F',
        }}
      >
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
          Gustavo Del Rio Lima
        </div>
        <div style={{ display: 'flex', width: 140, height: 8, backgroundColor: '#A4C3B2', margin: '36px 0' }} />
        <div style={{ display: 'flex', fontSize: 40, color: '#5A7D6F', lineHeight: 1.35, maxWidth: 960 }}>
          {siteHeadline}
        </div>
      </div>
    ),
    { ...size }
  );
}
