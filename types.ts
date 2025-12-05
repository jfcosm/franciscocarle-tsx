// Version 1.3
import { ReactNode } from "react";

export interface NavItem {
  key: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
  icon?: ReactNode;
  category: 'tech' | 'music' | 'hybrid';
}

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}

export type LanguageCode = 'es' | 'en' | 'fr' | 'it' | 'ar' | 'de' | 'ja' | 'ko' | 'zh' | 'uk' | 'hi' | 'ta' | 'gu' | 'arn';

export interface Translations {
  [key: string]: {
    nav: { [key: string]: string };
    hero: {
      role: string;
      tagline_1: string;
      tagline_2: string;
      tagline_3: string;
      synthesis: string;
      cta_portfolio: string;
      cta_linkedin: string;
      years_exp: string;
      albums: string;
      teams: string;
      available: string;
    };
    about: {
      main_text: string;
      agile_title: string;
      agile_desc: string;
      dev_title: string;
      dev_desc: string;
      creative_title: string;
      creative_desc: string;
    };
    projects: {
      subtitle: string;
      stack_label: string;
      descriptions: { [key: string]: string };
    };
    jobs: { [key: string]: Job };
    music: {
      profile_label: string;
      main_desc: string;
      discography_title: string;
      discography_desc: string;
      production_title: string;
      production_desc: string;
      listen_btn: string;
      studio_title: string;
    };
    titles: {
      philosophy: string;
      projects: string;
      music: string;
      experience: string;
      contact: string;
    };
    footer: {
      title: string;
      subtitle: string;
      rights: string;
      made_by: string;
      copy_email: string;
      copied: string;
    }
  }
}