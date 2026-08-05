import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/mockData';
import { Code2, Sparkles, ShieldCheck, TrendingUp, Cloud, Headphones, Rocket } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-blue-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
  Cloud: <Cloud className="w-6 h-6 text-cyan-400" />,
  Headphones: <Headphones className="w-6 h-6 text-pink-400" />,
  Rocket: <Rocket className="w-6 h-6 text-indigo-400" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>The JengaFlow Engineering Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Leading Businesses <span className="gradient-text-cyan">Trust JengaFlow</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We combine silicon-valley software standards with local Kenyan business realities—delivering reliable systems with direct founder accountability.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  {iconMap[item.iconName] || <Sparkles className="w-6 h-6 text-blue-400" />}
                </div>

                {item.badge && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
