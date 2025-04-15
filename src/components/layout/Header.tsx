import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-lg font-bold text-primary hover:text-primaryLight transition-colors">
            <span className="hidden md:inline">Gustavo Del Rio Lima</span>
            <span className="md:hidden"><FaHome size={20} /></span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="flex items-center gap-1 text-textDark hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200 ease-in-out rounded px-2 py-1">
            <FaUser className="md:hidden" size={18} />
            <span className="hidden md:inline">About</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 