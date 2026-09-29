export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'web' | 'enterprise' | 'infra' | 'custom';
  iconName: string;
  tags: string[];
  bentoSpan?: string; // CSS grid span helper class
  featured?: boolean;
}

export interface FlagshipProduct {
  id: string;
  title: string;
  category: string;
  price: string; // e.g., "Ksh 59,500" or "$460"
  numericPrice: number;
  priceUsd: string;
  priceEur: string;
  priceGbp: string;
  installments?: string;
  description: string;
  features: string[];
  badges: string[];
  targetAudience: string;
  image: string;
  demoAvailable?: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface TechStackItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Cloud & DevOps' | 'Databases & AI';
  iconName: string;
  level: string;
  color: string;
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  title: string;
  tag: string;
  category?: 'all' | 'live' | 'faith' | 'enterprise';
  summary: string;
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
  authorRole: string;
  techUsed: string[];
  liveUrl?: string;
  domain?: string;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  verified: boolean;
}

export interface StatItem {
  target: number;
  prefix?: string;
  suffix: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Plans' | 'Technical & Security' | 'Support & Care';
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceKes: string;
  priceUsd: string;
  priceEur: string;
  priceGbp: string;
  numericKes: number;
  numericUsd: number;
  numericEur: number;
  numericGbp: number;
  installments?: string;
  description: string;
  popular?: boolean;
  dark?: boolean;
  features: string[];
  buttonText: string;
}

export interface DemoModalState {
  isOpen: boolean;
  productName: string;
  productPrice?: string;
}
