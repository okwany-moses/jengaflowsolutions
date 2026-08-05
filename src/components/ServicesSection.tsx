import React from 'react';
import { Magnet, Database, Zap, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Core Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for SME Operations
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Purpose-built digital infrastructure designed to give local businesses the competitive
            edge of modern automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 space-y-4 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group">
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <Magnet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Lead Capture Pipelines</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              High-converting landing pages integrated directly into your WhatsApp, email, or
              database to capture every incoming opportunity.
            </p>
            <ul className="pt-2 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> WhatsApp & Web Form Hooks
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Instant Inquiry Alerts
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 space-y-4 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group">
            <div className="bg-sky-50 text-sky-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Robust Database Infrastructure</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Relational, multi-tier platforms utilizing production backends like PostgreSQL to
              cleanly store, track, and manage company data securely.
            </p>
            <ul className="pt-2 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> PostgreSQL & Cloud Relational
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> Encrypted Backups & Security
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 space-y-4 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group">
            <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Operations Automation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lightweight custom CRM portals built with modern UIs and Tailwind CSS to facilitate
              effortless tracking of clients, inventory, or broker interactions.
            </p>
            <ul className="pt-2 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" /> Custom Admin Portals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" /> Automated Workflow Triggers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
