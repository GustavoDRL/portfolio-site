import type { Metadata } from "next";
import "./globals.css";

// Import fonts here if needed (e.g., using next/font)
// import { Inter, Montserrat } from 'next/font/google'
import { Inter, Work_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
// const montserrat = Montserrat({ subsets: ['latin'], weight: '900', variable: '--font-montserrat' })
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable name
})

const work_sans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans', // CSS variable name
  weight: ['400', '500', '600', '700'] // Specify needed weights
})

// Define base URL for Open Graph images (replace with your deployed URL)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gustavo Del Rio Lima - AI & Robotics Portfolio",
    template: `%s | Gustavo Del Rio Lima Portfolio`, // Template for page titles
  },
  description: "Explore the professional portfolio of Gustavo Del Rio Lima, showcasing projects and expertise in Artificial Intelligence, Robotics, and Autonomous Systems.",
  keywords: ["AI", "Artificial Intelligence", "Robotics", "Autonomous Systems", "Portfolio", "Gustavo Del Rio Lima", "Developer", "Engineer", "ROS", "Machine Learning", "Deep Learning"],
  authors: [{ name: "Gustavo Del Rio Lima" }],
  creator: "Gustavo Del Rio Lima",
  // Open Graph Metadata (for social sharing)
  openGraph: {
    title: "Gustavo Del Rio Lima - AI & Robotics Portfolio",
    description: "Showcasing projects and expertise in AI, Robotics, and Autonomous Systems.",
    url: siteUrl,
    siteName: "Gustavo Del Rio Lima Portfolio",
    // Provide a default social sharing image (e.g., profile photo or a banner)
    // Place this image in public/images/
    images: [
      {
        url: `/images/og-image.jpg`, // Path relative to public folder
        width: 1200,
        height: 630,
        alt: "Gustavo Del Rio Lima Portfolio Social Preview",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Del Rio Lima - AI & Robotics Portfolio",
    description: "Explore projects in AI, Robotics, and Autonomous Systems.",
    // Add your Twitter handle if you have one
    // creator: "@yourTwitterHandle", 
    images: [`${siteUrl}/images/og-image.jpg`], // Must be absolute URL for Twitter
  },
  // Optional: Icons, Manifest
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add font variables to className if using next/font */}
      {/* <body className={`${inter.variable} ${montserrat.variable}`}> */}
      {/* Apply font variables to the body for global access */}
      <body className={`${inter.variable} ${work_sans.variable} font-sans antialiased`}> 
        {/* Layout structure (e.g., Header, Footer) will be added via a Layout component */}
        {children}
      </body>
    </html>
  );
} 