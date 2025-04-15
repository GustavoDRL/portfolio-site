import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-lg font-bold text-primary hover:text-primaryLight transition-colors">
            Gustavo Del Rio Lima
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {/* Navigation links will go here */}
          <Link href="/#projects" className="text-textDark hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200 ease-in-out rounded px-2 py-1">Projects</Link>
          <Link href="/about" className="text-textDark hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200 ease-in-out rounded px-2 py-1">About</Link>
        </div>
        {/* Mobile menu button can be added here */}
      </nav>
    </header>
  );
};

export default Header; 