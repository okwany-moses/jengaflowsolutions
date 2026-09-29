import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import {
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Globe,
  Layers,
} from 'lucide-react';

interface CaseStudiesProps {
  onRequestDemo?: (productName?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onRequestDemo }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'live', label: 'Live Client Platforms' },
    { id: 'faith', label: 'Faith & Non-Profit' },
    { id: 'enterprise', label: 'Enterprise & Infrastructure' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live') return !!study.liveUrl;
    if (activeFilter === 'faith') return study.category === 'faith';
    if (activeFilter === 'enterprise') return study.category === 'enterprise';
    return true;
  });

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Real-World Portfolio & Deployments</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & <span className="gradient-text">Live Client Work</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore live production systems engineered by JengaFlow Solutions for clients across Kenya, the United States, and Europe. Every platform is built for speed, security, and measurable ROI.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="inline-flex p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies Cards */}
        <div className="space-y-12">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 p-6 sm:p-8 lg:p-10 backdrop-blur-xl transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Browser Device Mockup with Real Live URL Bar */}
              <div className="lg:col-span-6 space-y-3">
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                  {/* Browser Address Bar */}
                  <div className="px-4 py-2.5 bg-slate-900/95 border-b border-slate-800/80 flex items-center justify-between gap-2">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 max-w-sm mx-auto bg-slate-950/90 px-3 py-1 rounded-lg border border-slate-800/90 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-300 truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">
                        {study.domain || (study.liveUrl ? study.liveUrl.replace('https://', '') : 'jengaflow.internal')}
                      </span>
                    </div>

                    {/* Live Badge */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold hidden sm:inline">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Visual Screenshot Display */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950 group">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Quick Visit overlay button */}
                    {study.liveUrl && (
                      <div className="absolute bottom-4 right-4 flex items-center gap-2">
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all duration-200"
                        >
                          <span>Visit Live Website</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Unboxed Metadata & Verification */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300 font-semibold">{study.clientName}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-blue-400">{study.tag}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Production</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Details & Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Quantitative Impact Metrics (Tabular Figures) */}
                <div className="grid grid-cols-3 gap-3 bg-slate-950/90 p-4 rounded-2xl border border-slate-800/90 text-center">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-display font-bold text-lg sm:text-xl text-emerald-400 tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Quote & Attribution */}
                <div className="bg-slate-950/50 p-4 rounded-xl border-l-2 border-blue-500 space-y-2">
                  <div className="flex items-start gap-2 text-slate-300 italic text-xs leading-relaxed">
                    <Quote className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>"{study.quote}"</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 pl-6">
                    — {study.author}, <span className="text-slate-500">{study.authorRole}</span>
                  </div>
                </div>

                {/* Technology Badges & Action Buttons */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {study.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <Globe className="w-3.5 h-3.5 text-blue-400" />
                        <span>Open {study.domain || 'Project'}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    )}

                    <button
                      onClick={() => onRequestDemo?.(`Custom Platform like ${study.clientName}`)}
                      className="px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Request Similar Architecture</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Client Trust Strip */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 rounded-3xl p-6 sm:p-8 border border-slate-800 text-center space-y-4">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            Engineering for Kenyan Institutions, US Startups & European Enterprises
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            By leveraging our Nairobi development hub, clients worldwide benefit from Silicon Savannah engineering talent at up to 75% lower development costs, full source code delivery, and 24/7 dedicated support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% IP & Code Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Vendor Lock-in
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bank-Grade TLS 1.3 Security
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
