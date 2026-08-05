import React from 'react';
import { motion } from 'motion/react';
import { IMPACT_STATS } from '../data/mockData';
import { Code2, Globe, Award, ShieldCheck, MessageCircle } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-blue-400" />,
  Globe: <Globe className="w-6 h-6 text-purple-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  MessageCircle: <MessageCircle className="w-6 h-6 text-cyan-400" />,
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl text-center space-y-2 backdrop-blur-xl hover:border-blue-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto mb-3">
                {iconMap[stat.iconName]}
              </div>

              <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.prefix}
                {stat.target}
                <span className="text-blue-400">{stat.suffix}</span>
              </div>

              <div className="font-bold text-xs text-slate-200">{stat.label}</div>
              <div className="text-[10px] text-slate-400">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
