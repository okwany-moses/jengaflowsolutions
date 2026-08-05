import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Menu, X, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSelectPlan?: (planName: string) => void;
  onRequestDemo?: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Process', href: '#process' },
    { name: 'Founder', href: '#founder' },
    { name: 'Work', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-blue-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                JengaFlow <span className="text-blue-500 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">Solutions</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-0.5">
                Software & Cloud Systems
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/254741067333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 px-3.5 py-2 rounded-full transition-all hover:bg-emerald-900/30"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onRequestDemo?.('Custom Software Blueprint')}
              className="group relative flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+254741067333"
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Call Engineer"
            >
              <Phone className="w-4 h-4 text-blue-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-slate-300 hover:text-blue-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://wa.me/254741067333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 py-3 rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp (+254 741 067333)</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo?.('Custom Enterprise Solution');
                }}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-blue-600 py-3 rounded-xl shadow-lg shadow-blue-600/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom Quote / Demo</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
