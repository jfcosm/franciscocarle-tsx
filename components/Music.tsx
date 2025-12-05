import React from 'react';
import { Music as MusicIcon, Disc, Headphones } from 'lucide-react';
import { TRANSLATIONS, PROFILE } from '../constants';
import { LanguageCode } from '../types';

interface MusicProps {
  lang: LanguageCode;
}

const MusicSection: React.FC<MusicProps> = ({ lang }) => {
  const titles = TRANSLATIONS[lang].titles;
  const content = TRANSLATIONS[lang].music;

  return (
    <section id="music" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950/30 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary-600 dark:text-secondary-400 font-medium tracking-widest text-sm uppercase">{content.profile_label}</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6">{titles.music}</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {content.main_desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Discography/Stats */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-secondary-600 dark:text-secondary-400 shadow-sm">
                <Disc className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{content.discography_title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {content.discography_desc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-secondary-600 dark:text-secondary-400 shadow-sm">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{content.production_title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {content.production_desc}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={PROFILE.appleMusic}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-500 text-white rounded-full transition-colors font-medium shadow-lg shadow-secondary-900/20"
              >
                <MusicIcon className="w-4 h-4" />
                {content.listen_btn}
              </a>
            </div>
          </div>

          {/* Visual Representation (Abstract Equalizer) */}
          <div className="relative bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
             
             <h4 className="text-slate-900 dark:text-white font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">{content.studio_title}</h4>
             
             <div className="space-y-4">
               <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                 <span>Logic Pro</span>
                 <span>Expert</span>
               </div>
               <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-secondary-500 w-[95%]"></div>
               </div>

               <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                 <span>Sound Design</span>
                 <span>Advanced</span>
               </div>
               <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-indigo-500 w-[85%]"></div>
               </div>

               <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                 <span>Mixing</span>
                 <span>Advanced</span>
               </div>
               <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-violet-500 w-[90%]"></div>
               </div>
             </div>

             <div className="mt-8 grid grid-cols-3 gap-2">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="h-16 bg-slate-200 dark:bg-slate-800 rounded-md flex items-end justify-center pb-2 group cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                    <div className={`w-1 bg-secondary-400 rounded-full group-hover:h-full transition-all duration-300 h-${Math.floor(Math.random() * 4) + 2}/6`}></div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;