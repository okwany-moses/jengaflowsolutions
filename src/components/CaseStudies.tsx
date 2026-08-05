import React from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/mockData';
import { ExternalLink, Sparkles, CheckCircle2, Quote } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Proven Client Success Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Case Studies & Live Work</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real enterprise software deployments engineered by JengaFlow Solutions for high-impact performance.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image & Tag */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 aspect-video lg:aspect-square">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 bg-slate-950/90 border border-slate-700 text-blue-400 px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md">
                  {study.tag}
                </div>

                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Right Case Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                  Client: {study.clientName}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {study.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 text-center">
                  {study.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-display font-bold text-lg text-emerald-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-slate-950/40 p-4 rounded-xl border-l-2 border-blue-500 space-y-2">
                  <div className="flex items-center gap-2 text-slate-300 italic text-xs">
                    <Quote className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>"{study.quote}"</span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 pl-6">
                    — {study.author}, <span className="text-slate-400">{study.authorRole}</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
