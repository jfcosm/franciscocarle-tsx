import React, { useState } from 'react';
import { 
  Languages, 
  Save, 
  Check, 
  Menu, 
  Type, 
  FileText
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { LanguageCode } from '../../types';

export const TranslationsEditor: React.FC = () => {
  const { data, updateTranslations } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [savedMessage, setSavedMessage] = useState(false);

  const langData = data.translations[selectedLang] || data.translations['es'];

  const [navForm, setNavForm] = useState(langData?.nav || {});
  const [titlesForm, setTitlesForm] = useState(langData?.titles || {});
  const [footerForm, setFooterForm] = useState(langData?.footer || {});

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    const target = data.translations[lang] || data.translations['es'];
    setNavForm(target?.nav || {});
    setTitlesForm(target?.titles || {});
    setFooterForm(target?.footer || {});
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateTranslations(selectedLang, 'nav', navForm);
    updateTranslations(selectedLang, 'titles', titlesForm);
    updateTranslations(selectedLang, 'footer', footerForm);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  const availableLanguages: { code: LanguageCode; label: string }[] = [
    { code: 'es', label: 'Español (ES)' },
    { code: 'en', label: 'English (EN)' },
    { code: 'pt', label: 'Português (PT)' },
    { code: 'fr', label: 'Français (FR)' },
    { code: 'de', label: 'Deutsch (DE)' },
    { code: 'it', label: 'Italiano (IT)' },
  ];

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in">
      {/* Top Bar */}
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Languages className="w-5 h-5 text-primary-500" />
            Textos Globales, Menús y Pie de Página
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Edita los nombres de las pestañas de navegación, títulos de secciones y textos de cierre en cualquier idioma.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedLang}
            onChange={(e) => handleLangChange(e.target.value as LanguageCode)}
            className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-white outline-none"
          >
            {availableLanguages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold text-sm shadow-md shadow-primary-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            {savedMessage ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{savedMessage ? '¡Guardado!' : 'Guardar Textos'}</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Menú de Navegación */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Menu className="w-4 h-4 text-primary-500" />
            Navegación / Header
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Inicio (Hero)</label>
            <input
              type="text"
              value={navForm.home || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, home: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Filosofía / Sobre mí</label>
            <input
              type="text"
              value={navForm.philosophy || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, philosophy: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Proyectos</label>
            <input
              type="text"
              value={navForm.projects || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, projects: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Música</label>
            <input
              type="text"
              value={navForm.music || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, music: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Experiencia</label>
            <input
              type="text"
              value={navForm.experience || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, experience: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Botón de Contacto (Header)</label>
            <input
              type="text"
              value={navForm.contact_btn || ''}
              onChange={(e) => setNavForm(prev => ({ ...prev, contact_btn: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Títulos de Secciones */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Type className="w-4 h-4 text-primary-500" />
            Títulos Principales de Secciones
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Perfil</label>
            <input
              type="text"
              value={titlesForm.philosophy || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, philosophy: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Portafolio</label>
            <input
              type="text"
              value={titlesForm.projects || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, projects: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Música</label>
            <input
              type="text"
              value={titlesForm.music || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, music: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Trayectoria</label>
            <input
              type="text"
              value={titlesForm.experience || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, experience: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Testimonios</label>
            <input
              type="text"
              value={titlesForm.testimonials || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, testimonials: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Sección Contacto</label>
            <input
              type="text"
              value={titlesForm.contact || ''}
              onChange={(e) => setTitlesForm(prev => ({ ...prev, contact: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Footer & Cierre */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary-500" />
            Pie de Página (Footer)
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subtítulo de Contacto</label>
            <textarea
              rows={3}
              value={footerForm.subtitle || ''}
              onChange={(e) => setFooterForm(prev => ({ ...prev, subtitle: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Texto de Derechos</label>
            <input
              type="text"
              value={footerForm.rights || ''}
              onChange={(e) => setFooterForm(prev => ({ ...prev, rights: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Texto Copiar Email</label>
            <input
              type="text"
              value={footerForm.copy_email || ''}
              onChange={(e) => setFooterForm(prev => ({ ...prev, copy_email: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Texto ¡Copiado!</label>
            <input
              type="text"
              value={footerForm.copied || ''}
              onChange={(e) => setFooterForm(prev => ({ ...prev, copied: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
