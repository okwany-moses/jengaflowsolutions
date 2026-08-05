import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import {
  Sparkles,
  Globe,
  Smartphone,
  Server,
  ShieldCheck,
  Briefcase,
  Users,
  GraduationCap,
  Church,
  Activity,
  Code,
  Layout,
  Cpu,
  Zap,
  BarChart3,
  Radio,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface BentoServicesProps {
  onRequestDemo?: (serviceName: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Globe: <Globe className="w-6 h-6 text-blue-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-emerald-400" />,
  Server: <Server className="w-6 h-6 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-indigo-400" />,
  Users: <Users className="w-6 h-6 text-pink-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-400" />,
  Church: <Church className="w-6 h-6 text-amber-300" />,
  Activity: <Activity className="w-6 h-6 text-rose-400" />,
  Code: <Code className="w-6 h-6 text-violet-400" />,
  Layout: <Layout className="w-6 h-6 text-teal-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  Zap: <Zap className="w-6 h-6 text-yellow-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-sky-400" />,
  Radio: <Radio className="w-6 h-6 text-orange-400" />,
};

export const BentoServices: React.FC<BentoServicesProps> = ({ onRequestDemo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (16)' },
    { id: 'ai', label: 'AI & Data Analytics' },
    { id: 'web', label: 'Web & Mobile' },
    { id: 'enterprise', label: 'Enterprise ERP & Systems' },
    { id: 'infra', label: 'Cloud Infrastructure' },
    { id: 'custom', label: 'Custom Engineering' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Technology Solutions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Bento Grid <span className="gradient-text">Engineering Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From modern web portals and M-Pesa automated workflows to AI systems and custom enterprise software, we engineer solutions designed for scale.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {activeCategory === cat.id && <Filter className="w-3 h-3" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => onRequestDemo?.(service.title)}
              className={`group relative rounded-2xl glass-card p-6 glass-card-hover cursor-pointer flex flex-col justify-between ${
                service.bentoSpan || 'col-span-1'
              }`}
            >
              {/* Top Card Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-md">
                    {iconMap[service.iconName] || <Code className="w-6 h-6 text-blue-400" />}
                  </div>

                  {service.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Tags & Action Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-400 border border-slate-800/80 text-[10px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                  <span>Consult Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
