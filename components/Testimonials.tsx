import React from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../constants';
import { Linkedin, Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: LanguageCode;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  const testimonials = t.testimonials || [];

  if (!testimonials || testimonials.length === 0) return null;

  // Duplicamos los testimonios para que el carrusel infinito (marquee) 
  // no tenga saltos bruscos cuando llegue al final y deba reiniciar.
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 relative z-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-4 tracking-tight">
          {t.titles.testimonials || 'Lo que dicen de mí'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-6"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Gradientes laterales para dar efecto de desvanecimiento premium */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 z-10"></div>

        {/* Pista del carrusel */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {duplicatedTestimonials.map((tItem, index) => (
            <a 
              key={`testimonial-${index}`} 
              href="https://www.linkedin.com/in/franciscocarle/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[300px] md:w-[400px] flex-none mx-4 p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-xl shadow-slate-200/20 dark:shadow-none flex flex-col justify-between backdrop-blur-sm transition-transform duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              <div>
                <Quote className="w-8 h-8 text-primary-500/40 mb-4" />
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed text-sm md:text-base">
                  "{tItem.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
                  {tItem.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-800 dark:text-white text-sm">
                    {tItem.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-primary-400">
                    {tItem.role}
                  </span>
                  {tItem.company && (
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-0.5 font-medium">
                      {tItem.company}
                    </span>
                  )}
                </div>
                <Linkedin className="w-5 h-5 text-slate-300 dark:text-slate-600 ml-auto flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
