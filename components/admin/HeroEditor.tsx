import React, { useState } from 'react';
import { 
  Sparkles, 
  Save, 
  Check, 
  Languages, 
  Layers, 
  MousePointerClick, 
  Activity
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { LanguageCode } from '../../types';

export const HeroEditor: React.FC = () => {
  const { data, updateTranslations } = useSiteData();
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('es');
  const [savedMessage, setSavedMessage] = useState(false);

  const heroData = data.translations[selectedLang]?.hero || data.translations['es']?.hero || {
    role: '',
    tagline_1: '',
    tagline_2: '',
    tagline_3: '',
    synthesis: '',
    cta_portfolio: '',
    cta_linkedin: '',
    years_exp: '',
    albums: '',
    teams: '',
    available: '',
    github: '',
  };

  const [formState, setFormState] = useState(heroData);

  // Sync when language changes
  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    const langHero = data.translations[lang]?.hero || data.translations['es']?.hero || heroData;
    setFormState(langHero);
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
    updateTranslations(selectedLang, 'hero', formState);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Editor de Hero / Portada Principal
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Personaliza los titulares de impacto, propuesta de valor, métricas y botones de llamada a la acción.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Selector */}
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

      <div className="grid md:grid-cols-2 gap-8">
        {/* Titulares y Textos */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary-500" />
            Titulares y Texto Central ({selectedLang.toUpperCase()})
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Badge de Disponibilidad (Píldora superior)
            </label>
            <input
              type="text"
              name="available"
              value={formState.available || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Ej: Disponible para nuevos proyectos"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Titular Principal (3 Líneas)
            </label>
            <div>
              <span className="text-[11px] text-slate-400">Línea 1 (Texto Normal):</span>
              <input
                type="text"
                name="tagline_1"
                value={formState.tagline_1 || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold focus:ring-2 focus:ring-primary-500 outline-none mt-1"
                placeholder="Liderazgo Ágil"
              />
            </div>
            <div>
              <span className="text-[11px] text-primary-500 font-medium">Línea 2 (Con Gradiente de Color Destacado):</span>
              <input
                type="text"
                name="tagline_2"
                value={formState.tagline_2 || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-primary-600 dark:text-primary-400 text-sm font-bold focus:ring-2 focus:ring-primary-500 outline-none mt-1"
                placeholder="+ Visión Técnica"
              />
            </div>
            <div>
              <span className="text-[11px] text-slate-400">Línea 3 (Cierre de titular):</span>
              <input
                type="text"
                name="tagline_3"
                value={formState.tagline_3 || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold focus:ring-2 focus:ring-primary-500 outline-none mt-1"
                placeholder="para resultados reales."
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Subtítulo de Rol Destacado
            </label>
            <input
              type="text"
              name="role"
              value={formState.role || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Senior Scrum Master (7+ Años) | Agile Coach | Full Stack"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Párrafo de Síntesis / Propuesta de Valor
            </label>
            <textarea
              name="synthesis"
              rows={4}
              value={formState.synthesis || ''}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
              placeholder="Facilito la entrega de valor en equipos tecnológicos complejos..."
            />
          </div>
        </div>

        {/* Botones de Acción y Métricas */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-primary-500" />
              Botones de Llamada a la Acción (CTA)
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Texto Botón Principal (Portafolio)
              </label>
              <input
                type="text"
                name="cta_portfolio"
                value={formState.cta_portfolio || ''}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Ver Portafolio"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Texto Botón Secundario (LinkedIn)
              </label>
              <input
                type="text"
                name="cta_linkedin"
                value={formState.cta_linkedin || ''}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="LinkedIn"
              />
            </div>
          </div>

          {/* Métricas e Indicadores de Logros */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <h3 className="font-bold text-slate-900 dark:text-white text-base border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              Métricas y Etiquetas de Estadísticas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Etiqueta Exp.
                </label>
                <input
                  type="text"
                  name="years_exp"
                  value={formState.years_exp || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="Años Exp. Ágil"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Etiqueta Música
                </label>
                <input
                  type="text"
                  name="albums"
                  value={formState.albums || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="Álbumes"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Etiqueta Equipos
                </label>
                <input
                  type="text"
                  name="teams"
                  value={formState.teams || ''}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="Equipos Liderados"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
