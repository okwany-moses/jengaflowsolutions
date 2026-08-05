import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FLAGSHIP_PRODUCTS } from '../data/mockData';
import { FlagshipProduct } from '../types';
import { CheckCircle2, Sparkles, ExternalLink, MessageCircle, Zap, Tag } from 'lucide-react';

interface FlagshipProductsProps {
  onRequestDemo: (productName: string, productPrice?: string) => void;
}

export const FlagshipProducts: React.FC<FlagshipProductsProps> = ({ onRequestDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Education & Academics', 'Healthcare & Medical', 'Faith & Non-Profit', 'Human Resources', 'Retail & Wholesale', 'Real Estate'];

  const filteredProducts = FLAGSHIP_PRODUCTS.filter((product) => {
    if (activeCategory === 'All') return true;
    return product.category === activeCategory;
  });

  return (
    <section id="products" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Turnkey Flagship Software Packages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready-to-Deploy <span className="gradient-text">Enterprise Software Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Pre-built, customizable business management portals designed for Kenyan enterprises. All prices range between <span className="text-emerald-400 font-bold">Ksh 79,000</span> to <span className="text-emerald-400 font-bold">Ksh 199,000</span> with full source code ownership options and M-Pesa integration.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40 scale-105'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product: FlagshipProduct, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:shadow-blue-500/10"
            >
              <div>
                {/* Header Graphic / Image Banner */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 border border-slate-700/80 text-blue-400 px-3 py-1 rounded-full text-xs font-mono font-medium backdrop-blur-md">
                    {product.category}
                  </div>

                  {/* Price Tag Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 px-3.5 py-1.5 rounded-full text-sm font-extrabold font-mono shadow-lg flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 fill-current" />
                    <span>{product.price}</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white drop-shadow-md">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Audience */}
                  <div className="text-xs text-slate-400 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                    <span className="text-slate-300 font-semibold">Target Audience:</span> {product.targetAudience}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Key Modules Included:
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {product.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[10px] font-semibold"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 mt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onRequestDemo(product.title, product.price)}
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Request Live Demo</span>
                </button>

                <a
                  href={`https://wa.me/254741067333?text=Hello%20Moses,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.title)}%20package%20priced%20at%20${encodeURIComponent(product.price)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-emerald-400 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
