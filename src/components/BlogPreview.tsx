import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/mockData';
import { Sparkles, ArrowRight, Clock, Calendar } from 'lucide-react';

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Tech Insights & Engineering Blog</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Latest Articles from <span className="gradient-text">Our Engineers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technical guides, system architecture blueprints, and M-Pesa API best practices.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {post.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-blue-400">
                <span>By {post.author}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
