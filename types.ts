import { LucideIcon } from 'lucide-react';

export type ViewState = 'home' | 'services' | 'cases' | 'contact' | 'smart-secretary';

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
  isPopular?: boolean;
  highlightColor?: string;
  minimumContract?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
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