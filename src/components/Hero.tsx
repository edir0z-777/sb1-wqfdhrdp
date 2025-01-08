import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactModal } from './ContactModal';

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="pt-32 pb-20 px-6 flex items-center justify-center min-h-screen hero-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold mb-8 tracking-tighter">
            <span className="text-red-500 hero-text">We Are Not Bugs</span><br/>
            <div className="inline-flex justify-center">
              <span className={`text-gray-400 ${showTyping ? 'typing-text' : 'opacity-0'}`}>
                We Are Features
              </span>
            </div>
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto reveal reveal-delay-1 font-mono">
            Elite cybersecurity collective specializing in advanced penetration testing, 
            security auditing, and digital warfare. We don't just find vulnerabilities - 
            we exploit them to make your systems stronger.
          </p>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="group px-8 py-4 bg-red-500/20 border border-red-500/50 text-red-500 font-mono hover:bg-red-500/30 transition-all duration-300 flex items-center space-x-2 mx-auto reveal reveal-delay-2"
          >
            <span>INITIATE CONTACT</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}