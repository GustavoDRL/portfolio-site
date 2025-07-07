'use client'; // Need this for hooks like usePathname and framer-motion components

import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
import Header from '@/components/layout/Header'; // Use path alias
import Footer from '@/components/layout/Footer'; // Use path alias
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Import usePathname

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname(); // Get current path

  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Wrap the main content with AnimatePresence */}
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)} // Scroll to top on page change
      >
        <motion.main 
          key={pathname} // Unique key for AnimatePresence
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'linear', duration: 0.3 }} // Adjust duration/easing as needed
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout; 