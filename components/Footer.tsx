import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Heart, Copy, Check, Github, Settings } from 'lucide-react';
import { LanguageCode } from '../types';
import { useSiteData } from '../context/SiteDataContext';

interface FooterProps {
  lang?: LanguageCode;
  onNavigateAdmin?: () => void;
}

const Footer: React.FC<FooterProps> = ({ lang = 'es', onNavigateAdmin }) => {
  const { data } = useSiteData();
  const profile = data.profile;
  const content = data.translations[lang]?.footer || data.translations['es']?.footer || {
    title: 'Hablemos',
    subtitle: 'Ya sea para liderar tu transformación ágil o potenciar tu equipo.',
    rights: 'Todos los derechos reservados.',
    made_by: 'Hecho con',
    tech_by: 'en React & Tailwind por',
    copy_email: 'Copiar Email',
    copied: '¡Copiado!',
    github: 'GitHub',
  };
  const titles = data.translations[lang]?.titles || data.translations['es']?.titles;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-white/40 dark:bg-slate-900/60 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{titles?.contact || 'Hablemos'}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-xl mx-auto">
          {content.subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {profile.email && (
            <button 
              onClick={handleCopyEmail}
              className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all group w-full md:w-auto shadow-sm backdrop-blur-sm cursor-pointer relative"
              title={copied ? content.copied : content.copy_email}
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                {copied ? (
                  <Check className="w-6 h-6 text-green-500" />
                ) : (
                  <Mail className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                )}
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  Email
                  {copied && <span className="text-green-500 font-bold ml-1">{content.copied}</span>}
                </p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">{profile.email}</p>
              </div>
              {!copied && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Copy className="w-4 h-4 text-slate-400" />
                </div>
              )}
            </button>
          )}

          {profile.linkedin && (
            <a 
              href={profile.linkedin}
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
          )}

          {profile.github && (
            <a 
              href={profile.github}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-500 transition-colors group w-full md:w-auto shadow-sm backdrop-blur-sm"
            >
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg group-hover:bg-slate-500/20 transition-colors">
                <Github className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400">{content.github || 'GitHub'}</p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">/jfcosm</p>
              </div>
            </a>
          )}
          
          {profile.phone && (
            <div className="flex items-center gap-3 px-6 py-4 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 w-full md:w-auto shadow-sm backdrop-blur-sm">
              <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                <Phone className="w-6 h-6 text-slate-500 dark:text-slate-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400">Teléfono</p>
                <p className="text-slate-800 dark:text-slate-200 font-medium">{profile.phone}</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. {content.rights}</p>
          
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1">
              {content.made_by} <Heart className="w-4 h-4 text-red-500 fill-current" /> {content.tech_by} 
              <a href="https://www.melodialab.net" target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline ml-1">
                MelodIA La♭
              </a>
            </p>

            {onNavigateAdmin && (
              <button
                onClick={onNavigateAdmin}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ml-2"
                title="Administrar Sitio"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Panel Admin</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;