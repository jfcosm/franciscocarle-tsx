// Version 1.9
import React from 'react';
import { Music as MusicIcon, Disc, Headphones, Mic2, Speaker, Piano, Guitar, ExternalLink } from 'lucide-react';
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

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Discography/Stats */}
          <div className="bg-white/40 dark:bg-slate-900/40 p-8 rounded-2xl backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-lg flex flex-col justify-center">
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-secondary-600 dark:text-secondary-400 shadow-sm shrink-0">
                  <Disc className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{content.discography_title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {content.discography_desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-secondary-600 dark:text-secondary-400 shadow-sm shrink-0">
                  <Headphones className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{content.production_title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {content.production_desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <a 
                href={PROFILE.appleMusic}
                target="_blank"
                rel="noreferrer"
                className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-[#FA243C] hover:bg-[#d61e32] text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1"
              >
                <MusicIcon className="w-5 h-5" />
                <span>{content.listen_btn}</span>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Studio/Gear Section */}
           <div className="relative bg-white/40 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-xl flex flex-col justify-center">
             <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
             
             <h4 className="text-slate-900 dark:text-white font-bold mb-8 border-b border-slate-200 dark:border-slate-700/50 pb-4 flex items-center gap-2 text-lg">
                <Speaker className="w-6 h-6 text-secondary-500" />
                {content.studio_title}
             </h4>
             
             <div className="space-y-8">
                {/* Software */}
                <div>
                   <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Software & DAW</h5>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">Logic Pro X (Expert)</span>
                      <span className="px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">Arturia V Collection</span>
                      <span className="px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">Analog Lab</span>
                   </div>
                </div>

                {/* Hardware */}
                <div>
                   <h5 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Hardware & Instruments</h5>
                   <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
                         <Guitar className="w-4 h-4 text-secondary-500" />
                         <span>Electric Guitars</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
                         <Piano className="w-4 h-4 text-secondary-500" />
                         <span>MIDI Controllers</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
                         <Mic2 className="w-4 h-4 text-secondary-500" />
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