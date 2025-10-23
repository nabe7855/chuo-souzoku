import type React from "react";

export interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isStandard?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  details: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  category: string;
  items: { name: string; light: string; standard: string; premium: string }[];
}

export interface TeamMember {
  name: string;
  title: string;
  // FIX: Add size property to allow passing it to lucide-react icons.
  icon: React.ComponentType<{ className?: string; size?: number }>;
}
