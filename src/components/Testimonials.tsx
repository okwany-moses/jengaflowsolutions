import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by Enterprise <span className="gradient-text">Leaders & SMEs</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Here is what CTOs, school administrators, and business owners say about JengaFlow Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6 hover:border-blue-500/30 transition-all"
            >
              <div className="space-y-4">
                {/* Stars & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Partner
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <div className="font-display font-bold text-sm text-white">{item.name}</div>
                  <div className="text-xs text-slate-400">{item.role} &bull; <span className="text-blue-400">{item.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
