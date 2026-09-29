import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_TIERS } from '../data/mockData';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Globe2,
  CalendarCheck,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

type CurrencyType = 'KES' | 'USD' | 'EUR' | 'GBP';

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<CurrencyType>('KES');

  // Interactive Custom Estimator State
  const [pagesCount, setPagesCount] = useState<number>(5);
  const [emailsCount, setEmailsCount] = useState<number>(3);
  const [needMpesa, setNeedMpesa] = useState<boolean>(true);
  const [needAI, setNeedAI] = useState<boolean>(false);
  const [needMobileApp, setNeedMobileApp] = useState<boolean>(false);

  // Dynamic estimate calculation based on currency (Landing from Ksh 19.5k to Ecommerce Ksh 69.5k)
  const calculateEstimate = () => {
    if (currency === 'USD') {
      let base = 150;
      base += Math.max(0, pagesCount - 3) * 25;
      base += emailsCount * 8;
      if (needMpesa) base += 65;
      if (needAI) base += 120;
      if (needMobileApp) base += 270;
      return `$${base.toLocaleString()}`;
    }

    if (currency === 'EUR') {
      let base = 140;
      base += Math.max(0, pagesCount - 3) * 22;
      base += emailsCount * 7;
      if (needMpesa) base += 60;
      if (needAI) base += 110;
      if (needMobileApp) base += 250;
      return `€${base.toLocaleString()}`;
    }

    if (currency === 'GBP') {
      let base = 120;
      base += Math.max(0, pagesCount - 3) * 20;
      base += emailsCount * 6;
      if (needMpesa) base += 50;
      if (needAI) base += 95;
      if (needMobileApp) base += 215;
      return `£${base.toLocaleString()}`;
    }

    // Default KES
    let base = 19500;
    base += Math.max(0, pagesCount - 3) * 2800;
    base += emailsCount * 1000;
    if (needMpesa) base += 8000;
    if (needAI) base += 15000;
    if (needMobileApp) base += 35000;
    return `Ksh ${base.toLocaleString()}`;
  };

  const getTierPrice = (tier: typeof PRICING_TIERS[0]) => {
    switch (currency) {
      case 'USD':
        return tier.priceUsd;
      case 'EUR':
        return tier.priceEur;
      case 'GBP':
        return tier.priceGbp;
      case 'KES':
      default:
        return tier.priceKes;
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Accessible Web & Software Engineering</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing With <span className="gradient-text">Milestone Installments</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From affordable high-converting landing pages at <span className="text-white font-bold">Ksh 19,500</span> to full enterprise e-commerce systems at <span className="text-white font-bold">Ksh 69,500</span>. All packages support flexible milestone installment payments.
          </p>
        </div>

        {/* Currency Switcher Bar */}
        <div className="flex flex-col items-center justify-center gap-3 mb-14">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-950/90 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-xl">
            <button
              onClick={() => setCurrency('KES')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                currency === 'KES'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>🇰🇪 KES (Ksh)</span>
            </button>

            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                currency === 'USD'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>🇺🇸 USD ($)</span>
            </button>

            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                currency === 'EUR'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>🇪🇺 EUR (€)</span>
            </button>

            <button
              onClick={() => setCurrency('GBP')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                currency === 'GBP'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>🇬🇧 GBP (£)</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Installment Payments Supported: Pay in 2 to 3 milestone splits</span>
          </div>
        </div>

        {/* 4 Package Cards */}
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
                  Most Popular For Growth
                </div>
              )}

              <div>
                <div className="font-display font-bold text-lg text-white mb-2">{tier.name}</div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2 tabular-nums">
                  {getTierPrice(tier)}
                </div>

                {/* Installment Badge */}
                {tier.installments && (
                  <div className="mb-4 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                    {tier.installments}
                  </div>
                )}

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
                  onClick={() => onSelectPlan(`${tier.name} (${getTierPrice(tier)}) with Installments`)}
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

        {/* Interactive Instant Custom Project Cost Estimator */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 bg-purple-950/60 px-3 py-1.5 rounded-full border border-purple-500/30 w-fit">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Custom Scope Calculator</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Estimate Your Custom Platform
            </h3>

            {/* Sliders & Toggles */}
            <div className="space-y-5 pt-2">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-2">
                  <span>Number of Web Pages / System Modules:</span>
                  <span className="text-blue-400 font-mono font-bold tabular-nums">{pagesCount} Pages</span>
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
                  <span>Corporate Emails (e.g. info@yourbrand.com):</span>
                  <span className="text-blue-400 font-mono font-bold tabular-nums">{emailsCount} Accounts</span>
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
                  <span>M-Pesa / Card Gateway</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={needAI}
                    onChange={(e) => setNeedAI(e.target.checked)}
                    className="accent-purple-500"
                  />
                  <span>AI Automation Agent</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={needMobileApp}
                    onChange={(e) => setNeedMobileApp(e.target.checked)}
                    className="accent-emerald-500"
                  />
                  <span>Mobile App (iOS/Android)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Result Calculation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/80 to-indigo-950/80 p-6 sm:p-8 rounded-2xl border border-blue-500/30 text-center space-y-4">
            <div className="text-xs font-mono text-blue-300 uppercase tracking-wider">
              Estimated Investment ({currency})
            </div>

            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
              {calculateEstimate()}
            </div>

            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-emerald-300 text-center">
              <span className="font-semibold">Milestone Installments:</span> Pay 40% upfront deposit to commence development, 30% upon interactive review, 30% upon final launch.
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Includes 1 year free domain (.co.ke / .com), SSL encryption, high-speed cloud hosting, and direct engineer support.
            </p>

            <button
              onClick={() => onSelectPlan(`Custom Estimate (${calculateEstimate()}) with Milestone Installments`)}
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock In This Custom Estimate</span>
            </button>

            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code Ownership & Free Setup</span>
            </div>
          </div>
        </div>

        {/* Global Payment Methods Banner */}
        <div className="mt-12 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 text-center text-xs text-slate-400 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Accepted Payment & Wire Methods:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
            <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">M-Pesa Daraja</span>
            <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">Visa / Mastercard</span>
            <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">Stripe</span>
            <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">Wise / Bank Wire</span>
            <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">PayPal</span>
          </div>
        </div>
      </div>
    </section>
  );
};
