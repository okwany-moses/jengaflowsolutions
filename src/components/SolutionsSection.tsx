import React from 'react';
import { Check, Home, Store, Briefcase, Truck } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Tailored Architectures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Built for Speed. Deployed for Stability.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We avoid heavy, over-engineered tools that slow down deployment. Instead, we use
              ultra-efficient modern software architectures designed to get business workflows
              operational in days, not months.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 text-blue-400 p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-base">Role-Based Access Control</h4>
                  <p className="text-slate-400 text-sm">
                    Secure authorization layers mapping permissions for admins, managers, and external agents.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 text-blue-400 p-1.5 rounded-lg mt-0.5 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-200 text-base">
                    Production-Grade Cloud Management
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Continuous delivery environments keeping cloud systems up, responsive, and logs clean.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Industry Grid */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/60 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Ideal for Industries Like:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/40 flex items-center space-x-3 hover:border-blue-500/40 transition-colors">
                <Home className="text-blue-400 w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-sm">Real Estate Portals</span>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/40 flex items-center space-x-3 hover:border-sky-500/40 transition-colors">
                <Store className="text-sky-400 w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-sm">Digital Marketplaces</span>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/40 flex items-center space-x-3 hover:border-indigo-500/40 transition-colors">
                <Briefcase className="text-indigo-400 w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-sm">Professional Services</span>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/40 flex items-center space-x-3 hover:border-emerald-500/40 transition-colors">
                <Truck className="text-emerald-400 w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-sm">SME Supply Chains</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};
