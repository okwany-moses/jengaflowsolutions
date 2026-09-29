import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoServices } from './components/BentoServices';
import { FlagshipProducts } from './components/FlagshipProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TechStack } from './components/TechStack';
import { ProcessTimeline } from './components/ProcessTimeline';
import { FounderSection } from './components/FounderSection';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { BlogPreview } from './components/BlogPreview';
import { FAQSection } from './components/FAQSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { DemoModal } from './components/DemoModal';
import { DemoModalState } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Business Pro');
  const [demoModal, setDemoModal] = useState<DemoModalState>({
    isOpen: false,
    productName: '',
    productPrice: '',
  });

  const handleOpenDemoModal = (productName?: string, productPrice?: string) => {
    setDemoModal({
      isOpen: true,
      productName: productName || 'Enterprise Software Solution',
      productPrice: productPrice || '',
    });
  };

  const handleCloseDemoModal = () => {
    setDemoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar onSelectPlan={handleSelectPlan} onRequestDemo={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onRequestDemo={handleOpenDemoModal} />

        {/* 2. Bento Grid Services (16 Services) */}
        <BentoServices onRequestDemo={handleOpenDemoModal} />

        {/* 4. Flagship Products (8 Systems, Ksh 79k - 199k) */}
        <FlagshipProducts onRequestDemo={handleOpenDemoModal} />

        {/* 5. Why Choose Us (7 Cards) */}
        <WhyChooseUs />

        {/* 6. Tech Stack (18 Technologies) */}
        <TechStack />

        {/* 7. 7-Step Process Timeline */}
        <ProcessTimeline />

        {/* 8. Founder Spotlight (Moses Otieno) */}
        <FounderSection />

        {/* 9. Case Studies (Gideons Kenya, etc.) */}
        <CaseStudies />

        {/* 10. Client Testimonials */}
        <Testimonials />

        {/* 11. Blog & Tech Insights */}
        <BlogPreview />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. SME Pricing & Interactive Cost Estimator */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 14. Glass Contact Form & Map */}
        <ContactSection selectedPlan={selectedPlan} onSelectPlan={handleSelectPlan} />
      </main>

      {/* Mega Footer */}
      <Footer />

      {/* Floating Action WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Interactive Live Demo Pop-up Modal */}
      <DemoModal
        isOpen={demoModal.isOpen}
        productName={demoModal.productName}
        productPrice={demoModal.productPrice}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}
