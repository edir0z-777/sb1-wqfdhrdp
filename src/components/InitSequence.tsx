import React, { useState, useEffect } from 'react';

export function InitSequence() {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const messages = [
      "[ ok ] Initializing system...",
      "[ ok ] Loading security protocols...",
      "[ ok ] Mounting kernel modules...",
      "[ ok ] Starting network services...",
      "[ ok ] Running threat analysis...",
      "[ ok ] Establishing secure connection...",
      "[ ok ] System ready."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length) {
        setLines(prev => [...prev, messages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="font-mono text-sm text-red-500 max-w-2xl w-full p-8">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">{line}</div>
        ))}
      </div>
    </div>
  );
}