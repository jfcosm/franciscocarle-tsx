import React, { useState } from 'react';
import { 
  BookOpen, 
  Save, 
  Check, 
  Languages, 
  X
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { LanguageCode } from '../../types';

export const AboutEditor: React.FC = () => {
  const { data, updateTranslations, updateSkills } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [savedMessage, setSavedMessage] = useState(false);

  // New skill input states
  const [newAgileSkill, setNewAgileSkill] = useState('');
  const [newDevSkill, setNewDevSkill] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');

  const aboutData = data.translations[selectedLang]?.about || data.translations['es']?.about || {
    main_text: '',
    agile_title: '',
    agile_desc: '',
    dev_title: '',
    dev_desc: '',
    soft_title: '',
    soft_desc: '',
  };

  const titlePhilosophy = data.translations[selectedLang]?.titles?.philosophy || 'Perfil Profesional';

  const [formState, setFormState] = useState(aboutData);
  const [sectionTitle, setSectionTitle] = useState(titlePhilosophy);

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    setFormState(data.translations[lang]?.about || data.translations['es']?.about || aboutData);
    setSectionTitle(data.translations[lang]?.titles?.philosophy || 'Perfil Profesional');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'about', formState);
    updateTranslations(selectedLang, 'titles', {
      ...data.translations[selectedLang]?.titles,
      philosophy: sectionTitle
    });
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  // Skill tag management
  const handleAddSkill = (category: 'agile' | 'dev' | 'soft', value: string, resetFn: (s: string) => void) => {
    if (!value.trim()) return;
    const currentList = data.skills[category] || [];
    if (!currentList.includes(value.trim())) {
      updateSkills(category, [...currentList, value.trim()]);
    }
    resetFn('');
  };

  const handleRemoveSkill = (category: 'agile' | 'dev' | 'soft', skillToRemove: string) => {
    const currentList = data.skills[category] || [];
    updateSkills(category, currentList.filter(s => s !== skillToRemove));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            Filosofía Profesional y Habilidades (About)
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Modifica la visión profesional, las 3 columnas estratégicas y la lista de competencias.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <Languages className="w-4 h-4 text-slate-400 ml-2" />
            <button
              type="button"
              onClick={() => handleLangChange('es')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${selectedLang === 'es' ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500'}`}
            >
              Español (ES)
            </button>
            <button
              type="button"
              onClick={() => handleLangChange('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${selectedLang === 'en' ? 'bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 shadow-sm' : 'text-slate-500'}`}
            >
              Inglés (EN)
            </button>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold text-sm shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            {savedMessage ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{savedMessage ? '¡Guardado!' : 'Guardar Cambios'}</span>
          </button>
        </div>
      </div>

      {/* Main Intro */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Título de la Sección ({selectedLang.toUpperCase()})
            </label>
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Perfil Profesional"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Texto Introductorio Principal ({selectedLang.toUpperCase()})
            </label>
            <textarea
              name="main_text"
              rows={3}
              value={formState.main_text}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Mi perfil técnico como desarrollador me permite..."
            />
          </div>
        </div>
      </div>

      {/* 3 Columns Editor */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Column 1: Agile */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/50 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Columna 1: Ágil</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Título</label>
            <input
              type="text"
              name="agile_title"
              value={formState.agile_title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Descripción</label>
            <textarea
              name="agile_desc"
              rows={3}
              value={formState.agile_desc}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Habilidades Ágiles</label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {data.skills.agile.map(skill => (
                <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill('agile', skill)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newAgileSkill}
                onChange={(e) => setNewAgileSkill(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill('agile', newAgileSkill, setNewAgileSkill); } }}
                placeholder="Agregar skill..."
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddSkill('agile', newAgileSkill, setNewAgileSkill)}
                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Dev */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-primary-200 dark:border-primary-900/50 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="w-3 h-3 rounded-full bg-primary-500"></span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Columna 2: Técnico / Dev</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Título</label>
            <input
              type="text"
              name="dev_title"
              value={formState.dev_title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Descripción</label>
            <textarea
              name="dev_desc"
              rows={3}
              value={formState.dev_desc}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-primary-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Stack / Tecnologías</label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {data.skills.dev.map(skill => (
                <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 text-xs font-medium border border-primary-200 dark:border-primary-800">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill('dev', skill)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newDevSkill}
                onChange={(e) => setNewDevSkill(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill('dev', newDevSkill, setNewDevSkill); } }}
                placeholder="Agregar tecnología..."
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddSkill('dev', newDevSkill, setNewDevSkill)}
                className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-bold hover:bg-primary-700"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: Soft Skills */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-secondary-200 dark:border-secondary-900/50 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="w-3 h-3 rounded-full bg-secondary-500"></span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Columna 3: Estrategia & Soft Skills</h3>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Título</label>
            <input
              type="text"
              name="soft_title"
              value={formState.soft_title}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold focus:ring-2 focus:ring-secondary-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Descripción</label>
            <textarea
              name="soft_desc"
              rows={3}
              value={formState.soft_desc}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-secondary-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-2">Habilidades de Gestión</label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {data.skills.soft.map(skill => (
                <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary-50 dark:bg-secondary-950/60 text-secondary-700 dark:text-secondary-300 text-xs font-medium border border-secondary-200 dark:border-secondary-800">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill('soft', skill)} className="hover:text-red-500">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSoftSkill}
                onChange={(e) => setNewSoftSkill(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill('soft', newSoftSkill, setNewSoftSkill); } }}
                placeholder="Agregar soft skill..."
                className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddSkill('soft', newSoftSkill, setNewSoftSkill)}
                className="px-3 py-1.5 bg-secondary-600 text-white rounded-lg text-xs font-bold hover:bg-secondary-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
