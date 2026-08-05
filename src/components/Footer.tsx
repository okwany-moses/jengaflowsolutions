import React, { useState } from 'react';
import { Code2, Mail, Phone, MessageCircle, ArrowRight, ShieldCheck, Heart, FileCode2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Footer: React.FC = () => {
  const [showSeoModal, setShowSeoModal] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (!href || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    } else {
      window.location.hash = href;
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'TechnologyCompany',
    name: 'JengaFlow Solutions',
    url: 'https://jengaflow.com',
    logo: 'https://jengaflow.com/icon.png',
    founder: {
      '@type': 'Person',
      name: 'Moses Otieno Okwany',
      jobTitle: 'Founder & Lead Solutions Architect',
    },
    telephone: '+254741067333',
    email: 'jengaflowsolutions@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kadongo, Homa Bay County',
      addressCountry: 'KE',
    },
    sameAs: [
      'https://gideonskenya.org/',
      'https://wa.me/254741067333',
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <h3 className="font-display font-bold text-2xl text-white">
              Stay Ahead in Software Engineering & AI
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              Subscribe to our monthly tech bulletin for M-Pesa Daraja updates, cloud microservices architecture, and SME automation strategies.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="bg-slate-950 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none flex-grow"
            />
            <button
              onClick={() => alert('Thank you for subscribing to JengaFlow Insights!')}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mega Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                JengaFlow <span className="text-blue-500">Solutions</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              World-class technology solutions, custom enterprise software platforms, and M-Pesa automated systems. Direct engineer accountability led by founder Moses Otieno Okwany.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href="mailto:jengaflowsolutions@gmail.com" className="hover:text-white">
                  jengaflowsolutions@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+254741067333" className="hover:text-white">
                  +254 741 067333 / +254 790 675885
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>Kadongo, Homa Bay County, Kenya &bull; Global Remote Operations</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">AI & Gemini Integrations</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Custom Web Applications</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Enterprise Mobile Apps</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Cloud & DevOps Clusters</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">Cybersecurity & RBAC</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-400 transition-colors">M-Pesa API Automation</a></li>
            </ul>
          </div>

          {/* Col 3: Software Products */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Turnkey Software
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">EduFlow School Portal</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">CareFlow Hospital ERP</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">GraceFlow Church Suite</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">PeopleFlow HR & Payroll</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">RetailFlow Cloud POS</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="hover:text-blue-400 transition-colors">EstateFlow Rental System</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Links & SEO */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Company & Technical
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#founder" onClick={(e) => handleNavClick(e, '#founder')} className="hover:text-blue-400 transition-colors">Founder Profile (Moses Otieno Okwany)</a></li>
              <li><a href="#case-studies" onClick={(e) => handleNavClick(e, '#case-studies')} className="hover:text-blue-400 transition-colors">Gideons Kenya Case Study</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-blue-400 transition-colors">Engineering Philosophy</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-blue-400 transition-colors">SME Package Pricing</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-blue-400 transition-colors">Help & FAQ</a></li>
              <li>
                <button
                  onClick={() => setShowSeoModal(true)}
                  className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>View SEO Schema.org Data</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-300 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} JengaFlow Solutions. All rights reserved. Lead Architect: Moses Otieno Okwany.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:jengaflowsolutions@gmail.com"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
            <a
              href="tel:+254741067333"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Support (+254 741 067333)</span>
            </a>
          </div>
        </div>
      </div>

      {/* SEO Schema Modal */}
      <AnimatePresence>
        {showSeoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-display font-bold text-white text-sm flex items-center gap-2">
                  <FileCode2 className="w-4 h-4 text-purple-400" /> JSON-LD Structured Data Schema
                </h4>
                <button
                  onClick={() => setShowSeoModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-xl text-[10px] font-mono text-emerald-400 overflow-x-auto leading-relaxed border border-slate-800">
                {JSON.stringify(schemaJson, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
