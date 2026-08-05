import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TECH_STACK } from '../data/mockData';
import { Cpu, Layers, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Cloud & DevOps', 'Databases & AI'];

  const filteredStack = TECH_STACK.filter((tech) => {
    if (activeCategory === 'All') return true;
    return tech.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-24 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Modern Enterprise Technologies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered with <span className="gradient-text">World-Class Tech</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We stay at the bleeding edge of software development, utilizing battle-tested frameworks, modern cloud microservices, and high-performance databases.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 scale-105'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredStack.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 backdrop-blur-md transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2 cursor-pointer shadow-md hover:shadow-blue-500/10"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform font-bold text-sm font-mono"
                style={{ color: tech.color }}
              >
                {tech.name.substring(0, 2)}
              </div>

              <div className="font-display text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                {tech.name}
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400 font-mono">{tech.category}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 font-semibold">
                  {tech.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
