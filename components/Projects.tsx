// Version 1.4
import React from 'react';
import { PROJECTS, TRANSLATIONS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { LanguageCode } from '../types';

interface ProjectsProps {
  lang: LanguageCode;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const titles = TRANSLATIONS[lang].titles;
  const content = TRANSLATIONS[lang].projects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 dark:border-white/5 inline-block">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{titles.projects}</h2>
            <p className="text-slate-600 dark:text-slate-300">{content.subtitle}</p>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium bg-white/50 dark:bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
            {content.stack_label} React 18 • Tailwind • Firebase
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/10 dark:hover:shadow-primary-900/20 hover:-translate-y-1"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 group-hover:border-primary-500/50 transition-colors">
                    {project.icon}
                  </div>
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                  {content.descriptions[project.id]}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;