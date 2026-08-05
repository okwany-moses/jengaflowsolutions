import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, ShieldCheck, Award, Code2, Sparkles, ExternalLink } from 'lucide-react';

// Founder portrait path from uploaded asset
import founderImg from '../assets/images/founder_moses_1785939016652.png';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-slate-900/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-xl">
          
          {/* Left Founder Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing border accent */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-40 animate-pulse-glow" />

            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-square sm:aspect-[4/5] lg:aspect-square">
              <img
                src={founderImg}
                alt="Moses Otieno Okwany - Founder & Lead Solutions Architect at JengaFlow Solutions"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />

              {/* Founder Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                <div className="font-display font-bold text-lg text-white">Moses Otieno Okwany</div>
                <div className="text-xs text-blue-400 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Founder & Lead Solutions Architect</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Founder Biography & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Leadership & Vision</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Direct Engineering Leadership with <span className="gradient-text">Zero Compromise</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              "At JengaFlow Solutions, we don’t hide behind middlemen or bloated agency overhead. When you partner with us, you work directly with senior architects who take personal ownership of your code, cloud architecture, and long-term uptime."
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Moses Otieno Okwany has engineered high-throughput fintech APIs, M-Pesa automated disbursers, and enterprise software systems across East Africa. From national organization platforms like <strong className="text-white">Gideons Kenya</strong> to custom SME ERPs, Moses ensures every project meets international engineering standards.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <div className="font-display font-bold text-white text-base">150+ Systems</div>
                <div className="text-xs text-slate-400">Successfully Architected</div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="font-display font-bold text-white text-base">Direct SLA Support</div>
                <div className="text-xs text-slate-400">Founder Accountable</div>
              </div>
            </div>

            {/* Contact Details & Direct Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <a
                  href="mailto:jengaflowsolutions@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-slate-900 px-3 py-2 rounded-lg border border-slate-800"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>jengaflowsolutions@gmail.com</span>
                </a>

                <a
                  href="tel:+254741067333"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-slate-900 px-3 py-2 rounded-lg border border-slate-800"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+254 741 067333 / +254 790 675885</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://wa.me/254741067333?text=Hello%20Moses%20Otieno%20Okwany,%20I%20would%20like%20to%20speak%20with%20you%20directly%20about%20our%20software%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Line</span>
                </a>

                <a
                  href="https://gideonskenya.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span>View Gideons Kenya Live Site</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
