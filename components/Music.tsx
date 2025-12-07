// Version 1.9
import React from 'react';
import { Music as MusicIcon, Disc, Headphones, Mic2, Speaker, Piano, Guitar } from 'lucide-react';
import { TRANSLATIONS, PROFILE } from '../constants';
import { LanguageCode } from '../types';

interface MusicProps {
  lang: LanguageCode;
}

const MusicSection: React.FC<MusicProps> = ({ lang }) => {
  const titles = TRANSLATIONS[lang].titles;
  const content = TRANSLATIONS[lang].music;

  return (
    <section id="music" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md p-8 rounded-3xl border border-white/20 dark:border-white/5 inline-block w-full">
          <span className="text-secondary-600 dark:text-secondary-400 font-medium tracking-widest text-sm uppercase">{content.profile_label}</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-6">{titles.music}</h2>
          <p className="text-slate-600 dark:text-slate-200 max-w-2xl mx-auto text-lg">
            {content.main_desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Discography/Stats */}
          <div className="space-y-8 bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-white/5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-full text-secondary-600 dark:text-secondary-400 shadow-sm">
                <Disc className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{content.discography_title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
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
                <p className="text-slate-600 dark:text-slate-300 mt-1">
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

          {/* Redesigned Studio/Gear Section */}
          <div className="relative bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl">
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
             
             <h4 className="text-slate-900 dark:text-white font-bold mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4 flex items-center gap-2">
                <Speaker className="w-5 h-5 text-secondary-500" />
                {content.studio_title}
             </h4>
             
             <div className="space-y-6">
                {/* Software */}
                <div>
                   <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Software & DAW</h5>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">Logic Pro X (Expert)</span>
                      <span className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">Arturia V Collection</span>
                      <span className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">Analog Lab</span>
                   </div>
                </div>

                {/* Hardware */}
                <div>
                   <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Hardware & Instruments</h5>
                   <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                         <Guitar className="w-3 h-3 text-secondary-500" />
                         <span>Electric Guitars</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                         <Piano className="w-3 h-3 text-secondary-500" />
                         <span>MIDI Controllers</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                         <Mic2 className="w-3 h-3 text-secondary-500" />
                         <span>Shure / Rode Mics</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;