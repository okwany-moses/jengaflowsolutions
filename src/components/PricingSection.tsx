import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data/mockData';
import { CheckCircle2, Sparkles, Zap, Calculator, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  // Interactive Custom Estimator State
  const [pagesCount, setPagesCount] = useState<number>(5);
  const [emailsCount, setEmailsCount] = useState<number>(3);
  const [needMpesa, setNeedMpesa] = useState<boolean>(true);
  const [needAI, setNeedAI] = useState<boolean>(false);
  const [needMobileApp, setNeedMobileApp] = useState<boolean>(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = 15000;
    base += Math.max(0, pagesCount - 3) * 3000;
    base += emailsCount * 1500;
    if (needMpesa) base += 12000;
    if (needAI) base += 25000;
    if (needMobileApp) base += 45000;
    return base;
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Transparent SME & Enterprise Packages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Investment, <span className="gradient-text">Zero Hidden Costs</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All plans include 1-year free domain registration, SSL security, high-speed cloud hosting, and direct engineer support.
          </p>
        </div>

        {/* 4 SME Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10'
                  : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular for SMEs
                </div>
              )}

              <div>
                <div className="font-display font-bold text-lg text-white mb-2">{tier.name}</div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                  {tier.price}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Package Deliverables:
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Instant ROI & Package Estimator Box */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 bg-purple-950/60 px-3 py-1.5 rounded-full border border-purple-500/30 w-fit">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Custom Project Cost Calculator</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Estimate Your Custom Solution
            </h3>

            {/* Sliders & Toggles */}
            <div className="space-y-5 pt-2">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-2">
                  <span>Number of Web Pages / System Views:</span>
                  <span className="text-blue-400 font-mono font-bold">{pagesCount} Pages</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={25}
                  value={pagesCount}
                  onChange={(e) => setPagesCount(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-2">
                  <span>Corporate Emails (e.g. info@yourcompany.co.ke):</span>
                  <span className="text-blue-400 font-mono font-bold">{emailsCount} Accounts</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={emailsCount}
                  onChange={(e) => setEmailsCount(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={needMpesa}
                    onChange={(e) => setNeedMpesa(e.target.checked)}
                    className="accent-blue-500"
                  />
                  <span>M-Pesa STK Push</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={needAI}
                    onChange={(e) => setNeedAI(e.target.checked)}
                    className="accent-purple-500"
                  />
                  <span>Gemini AI Agent</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={needMobileApp}
                    onChange={(e) => setNeedMobileApp(e.target.checked)}
                    className="accent-emerald-500"
                  />
                  <span>Flutter Mobile App</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Calculation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/80 to-indigo-950/80 p-6 sm:p-8 rounded-2xl border border-blue-500/30 text-center space-y-4">
            <div className="text-xs font-mono text-blue-300 uppercase tracking-wider">
              Estimated Investment
            </div>

            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Ksh {calculateEstimate().toLocaleString()}
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Includes 1 year domain (.co.ke / .com), SSL security, cloud hosting, and direct engineer support.
            </p>

            <button
              onClick={() => onSelectPlan(`Custom Estimate (Ksh ${calculateEstimate().toLocaleString()})`)}
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock In This Custom Estimate</span>
            </button>
          </div>
        </div>

        {/* Year 2 Renewal Transparency */}
        <div className="mt-12 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 text-center text-xs text-slate-400 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Transparent Year 2 Renewal Schedule:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono">
            <span>Domain (.co.ke): ~Ksh 1.5k/yr</span>
            <span>Cloud Hosting: ~Ksh 5.5k/yr</span>
            <span>SSL Security: ~Ksh 1k/yr</span>
            <span>Corporate Emails: ~Ksh 1.5k/yr</span>
          </div>
        </div>
      </div>
    </section>
  );
};
