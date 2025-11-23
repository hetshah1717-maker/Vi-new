import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detailedInfo: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  WHY_LOCAL = 'why-local',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact'
}