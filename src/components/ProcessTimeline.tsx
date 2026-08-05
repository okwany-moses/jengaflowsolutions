import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE_STEPS } from '../data/mockData';
import { Rocket, CheckCircle2, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5 text-purple-400" />
            <span>Structured Agile Execution</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our 7-Step <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From initial business discovery to zero-downtime deployment and lifetime maintenance, we ensure total clarity at every step.
          </p>
        </div>

        {/* Desktop Interactive Timeline Switcher Bar */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
          {TIMELINE_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20'
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-white'
              }`}
            >
              <div className="font-mono text-xs font-bold opacity-80 mb-1">{step.stepNumber}</div>
              <div className="text-xs font-semibold truncate">{step.title.split('&')[0]}</div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {/* Left Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-extrabold text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-xl border border-blue-500/20">
                {TIMELINE_STEPS[activeStep].stepNumber}
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" />
                <span>Duration: {TIMELINE_STEPS[activeStep].duration}</span>
              </div>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {TIMELINE_STEPS[activeStep].title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {TIMELINE_STEPS[activeStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Phase Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TIMELINE_STEPS[activeStep].deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 text-xs text-slate-200 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step navigation controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer"
              >
                Previous Step
              </button>
              <button
                disabled={activeStep === TIMELINE_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(TIMELINE_STEPS.length - 1, prev + 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" /> Phase Overview
              </span>
              <span className="text-blue-400 font-bold">Phase {activeStep + 1} of 7</span>
            </div>

            <div className="space-y-3">
              {TIMELINE_STEPS.map((s, idx) => (
                <div
                  key={s.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                    idx === activeStep
                      ? 'bg-blue-950/40 border-blue-500/50 text-white'
                      : idx < activeStep
                      ? 'bg-slate-900/40 border-emerald-500/30 text-slate-400'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-bold">{s.stepNumber}</span>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  {idx < activeStep ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : idx === activeStep ? (
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
