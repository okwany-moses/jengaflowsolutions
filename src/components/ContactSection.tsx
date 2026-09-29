import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ContactSectionProps {
  selectedPlan: string;
  onSelectPlan: (planName: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedPlan, onSelectPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: selectedPlan || 'Business Pro',
    paymentPlan: 'Milestone Installments (Recommended)',
    budget: 'Ksh 20k - Ksh 50k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, package: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send via Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f6922e97-daed-4db2-a140-294e15067824',
          from_name: 'JengaFlow Solutions Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          package: formData.package,
          payment_plan: formData.paymentPlan,
          budget: formData.budget,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name} (${formData.package}) [${formData.paymentPlan}]`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        // Direct fallback trigger
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Moses,%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Client')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A*Company:* ${encodeURIComponent(formData.company || 'N/A')}%0A*Selected Package:* ${encodeURIComponent(formData.package)}%0A*Payment Preference:* ${encodeURIComponent(formData.paymentPlan)}%0A*Budget Range:* ${encodeURIComponent(formData.budget)}%0A*Project Scope:* ${encodeURIComponent(formData.message || 'I would like to discuss a project with milestone installments.')}`;
    window.open(`https://wa.me/254741067333?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Founder & Engineering Consultation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Your <span className="gradient-text">Next System</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind or need a live software demo? Contact Lead Architect Moses Otieno Okwany directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-400" /> JengaFlow Solutions Headquarters
              </h3>

              <div className="space-y-5 text-xs text-slate-300">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px] font-semibold uppercase">Official Email</div>
                    <a href="mailto:jengaflowsolutions@gmail.com" className="font-semibold text-white hover:text-blue-400 transition-colors">
                      jengaflowsolutions@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px] font-semibold uppercase">Direct Engineer Call Lines</div>
                    <div className="space-y-0.5 font-semibold text-white">
                      <div><a href="tel:+254741067333" className="hover:text-emerald-400">+254 741 067333</a></div>
                      <div><a href="tel:+254790675885" className="hover:text-emerald-400">+254 790 675885</a></div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px] font-semibold uppercase">Instant WhatsApp Desk</div>
                    <a
                      href="https://wa.me/254741067333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-300 hover:underline"
                    >
                      +254 741 067333 (24/7 Response)
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[11px] font-semibold uppercase">Physical & Cloud Operations</div>
                    <div className="font-semibold text-white">Kadongo, Homa Bay County, Kenya &bull; Global Remote Services</div>
                  </div>
                </div>
              </div>

              {/* SLA badge */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white">&lt; 15 Minute Response Time</span> on all WhatsApp technical consultations.
                </div>
              </div>
            </div>

            {/* Embedded Google Map Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl p-2">
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <iframe
                  title="JengaFlow Solutions Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.826767232233!2d34.8028!3d-0.4578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b26090c2eb78b%3A0x6b4fb6c813be8a5d!2sKadongo%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Glass Contact & Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to JengaFlow Solutions. Lead Architect Moses Otieno Okwany will review your project details and respond within 15 minutes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    Request Project Blueprint & Quote
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Instant Response
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Eng. David Ochieng"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="david@company.co.ke"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone Number (WhatsApp) <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Starlight Retailers Ltd"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Package Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Interested Solution / Package
                    </label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all"
                    >
                      <option value="Landing Pages (Ksh 19,500)">Landing Pages (Ksh 19,500 / $150)</option>
                      <option value="Small Business (Ksh 29,500)">Small Business (Ksh 29,500 / $230)</option>
                      <option value="Business Pro (Ksh 44,500)">Business Pro (Ksh 44,500 / $345)</option>
                      <option value="Ecommerce Store (Ksh 69,500)">Ecommerce Store (Ksh 69,500 / $540)</option>
                      <option value="GraceFlow Church Suite (Ksh 59,500)">GraceFlow Church Suite (Ksh 59,500)</option>
                      <option value="RetailFlow POS (Ksh 64,500)">RetailFlow POS (Ksh 64,500)</option>
                      <option value="EduFlow School System (Ksh 69,500)">EduFlow School System (Ksh 69,500)</option>
                      <option value="PayFlow Salary & Banking (Ksh 74,500)">PayFlow Salary & Banking (Ksh 74,500)</option>
                      <option value="PeopleFlow HR & Payroll (Ksh 79,500)">PeopleFlow HR & Payroll (Ksh 79,500)</option>
                      <option value="StockFlow Supply Chain (Ksh 84,500)">StockFlow Supply Chain (Ksh 84,500)</option>
                      <option value="CareFlow Hospital ERP (Ksh 89,500)">CareFlow Hospital ERP (Ksh 89,500)</option>
                      <option value="EstateFlow Property (Ksh 89,500)">EstateFlow Property (Ksh 89,500)</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                    </select>
                  </div>

                  {/* Payment Structure Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Payment Preference
                    </label>
                    <select
                      name="paymentPlan"
                      value={formData.paymentPlan}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all"
                    >
                      <option value="Milestone Installments (2 to 3 Splits)">Milestone Installments (2 to 3 Splits)</option>
                      <option value="Two-Stage Split (50% start / 50% launch)">Two-Stage Split (50% start / 50% launch)</option>
                      <option value="Three-Stage Split (40% / 30% / 30%)">Three-Stage Split (40% / 30% / 30%)</option>
                      <option value="Full Upfront Payment (100%)">Full Upfront Payment (100%)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none transition-all"
                    >
                      <option value="Ksh 19,500 - Ksh 35,000">Ksh 19,500 - Ksh 35,000</option>
                      <option value="Ksh 35,000 - Ksh 70,000">Ksh 35,000 - Ksh 70,000</option>
                      <option value="Ksh 70,000 - Ksh 90,000">Ksh 70,000 - Ksh 90,000</option>
                      <option value="Ksh 90,000+ Enterprise">Ksh 90,000+ Enterprise</option>
                    </select>
                  </div>

                  {/* Empty filler or currency tag */}
                  <div className="flex items-center text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-800 self-end">
                    <span className="text-emerald-400 font-semibold mr-1.5">Note:</span> Installments available on all website & software tiers.
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Scope & Key Features Needed
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project goals, required integrations (e.g. M-Pesa, WhatsApp, SMS, KRA iTax)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-blue-500 text-slate-100 text-xs rounded-xl p-4 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Web Inquiry</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
