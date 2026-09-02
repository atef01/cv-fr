export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startYear: number;
  isCurrent?: boolean;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  clientOrContext?: string;
  url?: string;
  category: 'IA & NLP' | 'E-commerce' | 'Web & Cloud' | 'Scraping';
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  badgeCode?: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  pdfUrl: string;
}
