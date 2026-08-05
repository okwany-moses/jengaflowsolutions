import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Code2,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onRequestDemo?: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<'mpesa' | 'ai' | 'cloud'>('mpesa');

  const codeSnippets = {
    mpesa: `// JengaFlow M-Pesa STK Push SDK
import { MpesaClient } from '@jengaflow/mpesa-sdk';

const mpesa = new MpesaClient({
  consumerKey: process.env.DARAJA_KEY,
  shortCode: 174379, // Corporate Paybill
});

export async function processSTKPush(phone: string, amount: number) {
  const response = await mpesa.stkPush({
    phone: phone.replace('+', ''),
    amount: amount,
    accountRef: 'JENGA-INV-2026',
    callbackUrl: 'https://api.jengaflow.com/v1/mpesa/webhook',
  });
  return { status: 'SUCCESS_STK_SENT', checkoutID: response.CheckoutRequestID };
}`,
    ai: `# JengaFlow Gemini AI Automation Agent
import { GoogleGenAI } from '@google/genai';

ai = GoogleGenAI(api_key=os.getenv("GEMINI_API_KEY"))

async def auto_categorize_lead(lead_inquiry: str):
    response = await ai.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Analyze lead intent and calculate estimated package: {lead_inquiry}"
    )
    return response.parsed_json
# Status: Real-time Gemini 2.5 Active`,
    cloud: `// Cloud Run Deployment Blueprint
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: jengaflow-microservice
spec:
  template:
    spec:
      containers:
      - image: gcr.io/jengaflow-cloud/api-server:v2.4
        resources:
          limits: { cpu: "2000m", memory: "2Gi" }
        env:
        - name: DATABASE_URL
          valueFrom: { secretKeyRef: { name: "pg-credentials" } }
# Status: 99.99% Cloud Uptime Guaranteed`,
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden hero-gradient flex items-center">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-blue-900/20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>JengaFlow Solutions &bull; Enterprise Software Architecture</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building <span className="gradient-text">Intelligent Digital</span> Solutions for Tomorrow.
            </h1>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We design and engineer enterprise-grade software systems, M-Pesa automated platforms, cloud ERPs, and AI-powered mobile apps that empower businesses to scale securely and efficiently.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                99.99% Server Uptime
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                M-Pesa Daraja 2.0 Native
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400" />
                Agile 14-Day Delivery
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onRequestDemo?.('Enterprise System Blueprint')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <span>View Flagship Systems</span>
                <Layers className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="https://wa.me/254741067333?text=Hello%20Moses,%20I%20would%20like%20to%20discuss%20a%20technology%20project%20with%20JengaFlow%20Solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Direct (+254 741 067333)</span>
              </a>
            </div>

            {/* Stats summary strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-display text-2xl font-bold text-white">150+</div>
                <div className="text-xs text-slate-400 font-medium">Projects Deployed</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-blue-400">99.8%</div>
                <div className="text-xs text-slate-400 font-medium">Client Retention</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-purple-400">&lt; 15 min</div>
                <div className="text-xs text-slate-400 font-medium">SLA Support Line</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Interactive Code & System Architecture Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse-glow" />

            <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" /> jengaflow-core-v2.5
                  </span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                    Engine Online
                  </span>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex bg-slate-950 border-b border-slate-800/80 px-2 pt-2 gap-1 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('mpesa')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'mpesa'
                      ? 'bg-slate-900 text-blue-400 border-t-2 border-blue-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Zap className="w-3 h-3 text-emerald-400" />
                  m_pesa_sdk.ts
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'ai'
                      ? 'bg-slate-900 text-purple-400 border-t-2 border-purple-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3 h-3 text-purple-400" />
                  ai_agent.py
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeTab === 'cloud'
                      ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3 h-3 text-cyan-400" />
                  cloud_run.yaml
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed bg-slate-950/80 min-h-[260px]">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Cloud Run Cluster: Kenya (af-south-1)</span>
                </div>
                <div className="text-emerald-400 font-semibold">Latency: 12ms</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Enterprise Clients Logo Banner */}
        <div className="mt-16 pt-10 border-t border-slate-800/60">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by Forward-Thinking Enterprises & Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 hover:opacity-100 transition-opacity">
            <a
              href="https://gideonskenya.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm tracking-wide bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800 transition-all hover:border-blue-500/40"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>GIDEONS KENYA</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm bg-slate-900/40 px-4 py-2 rounded-xl border border-slate-800/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SafePay Financial</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm bg-slate-900/40 px-4 py-2 rounded-xl border border-slate-800/60">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>GreenPastures Agri</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm bg-slate-900/40 px-4 py-2 rounded-xl border border-slate-800/60">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>Apex Logistics Kenya</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm bg-slate-900/40 px-4 py-2 rounded-xl border border-slate-800/60">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>EduFlow Academy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
