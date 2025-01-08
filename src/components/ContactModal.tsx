import React, { useState } from 'react';
import { X, Send, Shield, Terminal, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        'service_9wsoaaq', // Replace with your EmailJS service ID
        'template_gdisvzc', // Replace with your EmailJS template ID
        {
          to_email: 'edir@rozsys.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'L8zqpaXzrfbSe3YOn' // Replace with your EmailJS public key
      );
      
      setStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', message: '' });
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto">
      <div className="w-full min-h-screen p-4 md:p-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-400"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-w-2xl mx-auto pt-16">
          <div className="mb-8 flex items-center justify-center space-x-3">
            <Terminal className="w-8 h-8 text-red-500" />
            <div className="font-mono text-red-500 text-xl">[SECURE_TRANSMISSION_PROTOCOL]</div>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-mono text-green-500 mb-2">TRANSMISSION_SUCCESSFUL</h3>
              <p className="text-gray-400">Your message has been securely transmitted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-sm text-red-500 mb-2">
                    $ IDENTIFY_YOURSELF (Full Name)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/60 border border-red-500/30 rounded px-4 py-3 text-red-500 font-mono focus:outline-none focus:border-red-500/50 placeholder-red-500/30"
                    placeholder="ENTER_CODENAME"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm text-red-500 mb-2">
                    $ COMMUNICATION_CHANNEL (Email Address)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/60 border border-red-500/30 rounded px-4 py-3 text-red-500 font-mono focus:outline-none focus:border-red-500/50 placeholder-red-500/30"
                    placeholder="ENTER_SECURE_EMAIL"
                    required
                  />
                </div>

                <div>
                  <label className="block font-mono text-sm text-red-500 mb-2">
                    $ MISSION_PARAMETERS (Your Message)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full bg-black/60 border border-red-500/30 rounded px-4 py-3 text-red-500 font-mono focus:outline-none focus:border-red-500/50 placeholder-red-500/30"
                    placeholder="ENTER_MISSION_DETAILS"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group w-full px-8 py-4 bg-red-500/20 border border-red-500/50 text-red-500 font-mono hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                <Shield className="w-5 h-5" />
                <span>
                  {status === 'sending' ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION'}
                </span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              {status === 'error' && (
                <div className="text-red-500 text-center font-mono">
                  TRANSMISSION_ERROR: Please try again.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}