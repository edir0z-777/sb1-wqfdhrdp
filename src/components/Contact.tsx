import React, { useState } from 'react';
import { Send, Shield } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_9wsoaaq',
        'template_gdisvzc',
        {
          to_email: 'edir@rozsys.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'L8zqpaXzrfbSe3YOn'
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono font-bold text-red-500 mb-4 reveal">Initiate Contact</h2>
          <p className="text-gray-400 reveal reveal-delay-1">Secure communication channel for project inquiries</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 reveal reveal-delay-2">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Codename (Full Name)</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/40 border border-red-900/20 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-red-500/50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Secure Email (Email Address)</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/40 border border-red-900/20 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-red-500/50"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Mission Brief (Your Message)</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="w-full bg-black/40 border border-red-900/20 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-red-500/50"
                required
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group px-8 py-4 bg-red-500/20 border border-red-500/50 text-red-500 font-mono hover:bg-red-500/30 transition-all duration-300 flex items-center space-x-3 disabled:opacity-50"
            >
              <Shield className="w-5 h-5" />
              <span>
                {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT SECURE MESSAGE'}
              </span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {status === 'success' && (
            <div className="text-green-500 text-center font-mono">
              TRANSMISSION_SUCCESSFUL: Message sent securely.
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-red-500 text-center font-mono">
              TRANSMISSION_ERROR: Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}