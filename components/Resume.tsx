// Version 1.4
import React from 'react';
import { JOB_IDS, TRANSLATIONS } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { LanguageCode } from '../types';

interface ResumeProps {
  lang: LanguageCode;
}

const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].titles;
  const jobs = TRANSLATIONS[lang].jobs;

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-white/5 inline-block w-full mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">{t.experience}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700/50"></div>

          <div className="space-y-12">
            {JOB_IDS.map((jobId, index) => {
              const job = jobs[jobId];
              return (
                <div key={jobId} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 mt-1.5 z-10 shadow-lg shadow-primary-500/20"></div>
                  
                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2">
                     <div className={`bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-6 rounded-xl border border-white/20 dark:border-white/10 hover:border-slate-400 dark:hover:border-slate-500 transition-all shadow-sm ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                        <div className={`flex flex-col gap-1 mt-1 mb-4 text-sm text-slate-500 dark:text-slate-400 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                          <span className="font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1">
                             <Briefcase className="w-3 h-3" /> {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {job.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {job.location}
                          </span>
                        </div>
                        
                        <ul className={`space-y-2 mb-4 text-slate-600 dark:text-slate-300 text-sm ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                          {job.description.map((desc, i) => (
                            <li key={i} className="leading-relaxed opacity-90">
                               • {desc}
                            </li>
                          ))}
                        </ul>

                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                          {job.skills.map(skill => (
                            <span key={skill} className="px-2 py-0.5 bg-slate-100/80 dark:bg-slate-800/80 rounded text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;