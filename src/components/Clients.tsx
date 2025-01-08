import React from 'react';

export function Clients() {
  const clients = [
    { id: 1, industry: "Healthcare" },
    { id: 2, industry: "Government" },
    { id: 3, industry: "Financial Services" },
    { id: 4, industry: "Defense" },
    { id: 5, industry: "Retail" },
    { id: 6, industry: "Technology" },
    { id: 7, industry: "Energy" },
    { id: 8, industry: "Transportation" }
  ];

  return (
    <section id="clients" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-mono font-bold text-center mb-24 text-red-500 reveal">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
          {clients.map(({ id, industry }) => (
            <div key={id} className="reveal reveal-delay-1">
              <div className="aspect-[3/2] rounded-lg bg-white/5 border border-red-900/20 flex flex-col items-center justify-center p-6 hover:bg-red-500/5 transition-colors duration-300">
                <div className="text-red-500 font-mono text-2xl font-bold mb-2">CLIENT #{id}</div>
                <div className="text-gray-400 font-mono text-sm">{industry}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-12 font-mono text-lg reveal reveal-delay-2">
          Due to the nature of our work, client identities are protected under strict NDAs
        </p>
      </div>
    </section>
  );
}