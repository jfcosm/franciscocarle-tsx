// Version 1.4
import React from 'react';
import { SKILLS, TRANSLATIONS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { LanguageCode } from '../types';

interface AboutProps {
  lang: LanguageCode;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const titles = TRANSLATIONS[lang].titles;
  const content = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 p-8 rounded-3xl bg-white/30 dark:bg-slate-900/30 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{titles.philosophy}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {content.main_text}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Agile Column - Emphasized */}
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border-2 border-primary-500/30 dark:border-primary-500/30 hover:border-primary-500 transition-colors shadow-lg shadow-primary-500/5">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              {content.agile_title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
              {content.agile_desc}
            </p>
            <ul className="space-y-3">
              {SKILLS.agile.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Dev Column */}
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-white/10 hover:border-primary-500/50 transition-colors relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100/50 dark:bg-primary-500/10 rounded-bl-full -mr-4 -mt-4"></div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
              {content.dev_title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
              {content.dev_desc}
            </p>
            <ul className="space-y-3">
              {SKILLS.dev.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Column */}
          <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-2xl border border-white/20 dark:border-white/10 hover:border-secondary-500/50 transition-colors shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary-500 rounded-full"></span>
              {content.creative_title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
              {content.creative_desc}
            </p>
            <ul className="space-y-3">
              {SKILLS.creative.map(skill => (
                <li key={skill} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;