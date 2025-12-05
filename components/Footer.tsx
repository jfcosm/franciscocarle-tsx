import React from 'react';
import { Mail, Linkedin, Phone, Heart } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';
import { LanguageCode } from '../types';

interface FooterProps {
  lang?: LanguageCode;
}

const Footer: React.FC<FooterProps> = ({ lang = 'es' }) => {
  const content = TRANSLATIONS[lang].footer;
  const titles = TRANSLATIONS[lang].titles;

  return (
    <footer id="contact" className="bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{titles.contact}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-xl mx-auto">
          {content.subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <a 
            href={`mailto:${PROFILE.email}`} 
            className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors group w-full md:w-auto shadow-sm backdrop-blur-sm"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-primary-500/20 transition-colors">
              <Mail className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
              <p className="text-slate-800 dark:text-slate-200 font-medium">{PROFILE.email}</p>
            </div>
          </a>

          <a 
            href={PROFILE.linkedin}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group w-full md:w-auto shadow-sm backdrop-blur-sm"
          >
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <Linkedin className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
              <p className="text-slate-800 dark:text-slate-200 font-medium">/in/franciscocarle</p>
            </div>
          </a>
          
          <div className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-auto shadow-sm backdrop-blur-sm">
            <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
              <Phone className="w-6 h-6 text-slate-500 dark:text-slate-400" />
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500 dark:text-slate-400">Teléfono</p>
              <p className="text-slate-800 dark:text-slate-200 font-medium">{PROFILE.phone}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Francisco Carle. {content.rights}</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            {content.made_by} <Heart className="w-4 h-4 text-red-500 fill-current" /> en React & Tailwind por 
            <a href="https://www.melodialab.net" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline ml-1">
              MelodIA La♭
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;