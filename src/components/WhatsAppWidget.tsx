import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/254741067333?text=Hello%20Moses,%20I%20am%20visiting%20the%20JengaFlow%20Tech%20website%20and%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center gap-2 group transition-all duration-300 hover:scale-105 border border-emerald-400/40"
      aria-label="Chat directly on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-1 pr-1">
        Chat with Founder (+254 741 067333)
      </span>
    </a>
  );
};
