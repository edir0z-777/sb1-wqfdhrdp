import React from 'react';
import { Lock, Server, Cpu } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Penetration Testing",
      description: "Advanced security assessments that expose vulnerabilities before they're exploited."
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: "Infrastructure Hardening",
      description: "Military-grade security implementations for critical systems and networks."
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: "Incident Response",
      description: "24/7 rapid response team for active threats and security breaches."
    }
  ];

  return (
    <section id="services" className="py-32 bg-black/40">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-mono font-bold text-center mb-24 text-red-500 reveal">
          Core Operations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} 
                 className="group p-8 border border-red-900/20 bg-black/40 hover:bg-red-500/5 transition-all duration-300 reveal reveal-delay-1">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-mono font-bold mb-4 text-red-500">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-mono">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}