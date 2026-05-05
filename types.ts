

import { LucideIcon } from 'lucide-react';

export type ViewState = 'home' | 'services' | 'cases' | 'contact';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  imageUrl: string;
  benefits: string[];
  differentiation: string[];
  process: string[];
  deliveryTime: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  detailedFeatures?: string[];
  ctaText?: string;
  isPopular?: boolean;
  highlightColor?: string;
  minimumContract?: string;
}

export interface ChatMessage {
  from: 'me' | 'them';
  text: string;
  time: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatarUrl: string;
  date: string;
  conversation: ChatMessage[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  id: string;
  client: string;
  segment: string;
  services: string;
  results: { label: string; value: string }[];
  imageUrl: string;
}
