import React from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollToTop: () => void;
  initComplete: boolean;
}

export function Header({ isMenuOpen, setIsMenuOpen, handleNavClick, scrollToTop, initComplete }: HeaderProps) {
  return (
    <header className={`fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-red-900/20 z-40 transition-opacity duration-500 ${initComplete ? 'opacity-100' : 'opacity-0'}`}>
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
            <Terminal className="w-8 h-8 text-red-500 terminal-icon" />
            <span className="text-xl font-['Orbitron'] text-red-500 font-bold tracking-wider">ROZWAY SYSTEMS</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" onClick={handleNavClick} className="font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Services</a>
            <a href="#expertise" onClick={handleNavClick} className="font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Expertise</a>
            <a href="#clients" onClick={handleNavClick} className="font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Clients</a>
            <a href="#contact" onClick={handleNavClick} className="font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Contact</a>
          </div>
          <button 
            className="md:hidden text-red-500 hover:text-red-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-4">
            <a href="#services" onClick={handleNavClick} className="block font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Services</a>
            <a href="#expertise" onClick={handleNavClick} className="block font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Expertise</a>
            <a href="#clients" onClick={handleNavClick} className="block font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Clients</a>
            <a href="#contact" onClick={handleNavClick} className="block font-mono text-gray-400 hover:text-red-500 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}