import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, MessageCircle, Send, CheckCircle2, ShieldCheck, Video, PhoneCall } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  productName: string;
  productPrice?: string;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, productName, productPrice, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [demoType, setDemoType] = useState('Interactive Zoom Live Walkthrough');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f6922e97-daed-4db2-a140-294e15067824',
          from_name: 'JengaFlow Solutions Demo Booking',
          name,
          email,
          phone,
          productName,
          productPrice,
          demoType,
          subject: `Software Demo Request: ${productName} by ${name}`,
        }),
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Moses,%0A%0AI would like to request a Live Demo for *${encodeURIComponent(productName)}* ${productPrice ? `(${encodeURIComponent(productPrice)})` : ''}.%0A%0A*Name:* ${encodeURIComponent(name || 'Client')}%0A*Phone:* ${encodeURIComponent(phone || 'N/A')}%0A*Demo Preference:* ${encodeURIComponent(demoType)}`;
    window.open(`https://wa.me/254741067333?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-500/30 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Software Demo & Blueprint</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              {productName}
            </h3>
            {productPrice && (
              <p className="text-xs text-emerald-400 font-mono font-bold">
                Listed Price: {productPrice} (Full Turnkey Package)
              </p>
            )}
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">Demo Booking Requested!</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Lead Architect Moses Otieno Okwany has received your request and will contact you via WhatsApp / Call to confirm your demo time.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Your Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eng. David Ochieng"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone / WhatsApp Number <span className="text-blue-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 7XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Corporate Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="david@company.co.ke"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Preferred Demo Format
                </label>
                <select
                  value={demoType}
                  onChange={(e) => setDemoType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-3.5 py-2.5 outline-none"
                >
                  <option value="Interactive Zoom Live Walkthrough">Interactive Zoom Live Walkthrough</option>
                  <option value="Pre-recorded Video Overview">Pre-recorded Video Overview</option>
                  <option value="On-Site Executive Presentation (Homa Bay / Nairobi / Nationwide)">On-Site Executive Presentation (Homa Bay / Nairobi / Nationwide)</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Demo Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-1/2 py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Engineer</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
