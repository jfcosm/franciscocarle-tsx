// Version 1.3
import React from 'react';
import { ArrowRight, Code, Music } from 'lucide-react';
import { PROFILE, TRANSLATIONS } from '../constants';
import { LanguageCode } from '../types';

interface HeroProps {
  lang: LanguageCode;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements managed by global Background component */}
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {t.available}
          </div>
          
          <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-white/5 inline-block">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.tagline_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                {t.tagline_2}
              </span> <br />
              {t.tagline_3}
            </h1>
            
            <h2 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mt-4">
              {t.role}
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg mt-4">
              {t.synthesis}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-white transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-slate-900/20"
            >
              {t.cta_portfolio} <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer" 
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors backdrop-blur-sm"
            >
              {t.cta_linkedin}
            </a>
          </div>

          <div className="flex gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/50">
            <div className="text-center md:text-left bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">7+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.years_exp}</p>
            </div>
            <div className="text-center md:text-left bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">2</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.albums}</p>
            </div>
            <div className="text-center md:text-left bg-white/20 dark:bg-slate-900/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">6+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.teams}</p>
            </div>
          </div>
        </div>

        {/* Visual / Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-slate-300 dark:border-slate-700/50 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-300 dark:border-slate-700/30 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Container */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-800">
              <img 
                src={PROFILE.image} 
                alt="Francisco Carle" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -left-4 top-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow">
              <div className="p-2 bg-primary-100 dark:bg-primary-500/20 rounded-lg">
                <Code className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Desarrollo</p>
                <p className="font-bold text-slate-900 dark:text-slate-100">Full Stack</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow delay-1000">
              <div className="p-2 bg-secondary-100 dark:bg-secondary-500/20 rounded-lg">
                <Music className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Producción</p>
                <p className="font-bold text-slate-900 dark:text-slate-100">Musical</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;