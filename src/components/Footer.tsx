import React from 'react';
import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black/40 border-t border-red-900/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="w-6 h-6 text-red-500" />
            <span className="font-['Orbitron'] text-red-500">ROZWAY SYSTEMS</span>
          </div>
          <div className="text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} ROZWAY SYSTEMS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}