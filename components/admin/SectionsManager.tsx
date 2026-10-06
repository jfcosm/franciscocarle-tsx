import React from 'react';
import { 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  Layers, 
  CheckCircle2,
  Sparkles,
  BookOpen,
  Code,
  Music,
  Briefcase,
  MessageSquareQuote
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

const SECTION_ICONS: Record<string, React.FC<{ className?: string }>> = {
  hero: Sparkles,
  about: BookOpen,
  projects: Code,
  music: Music,
  resume: Briefcase,
  testimonials: MessageSquareQuote,
};

const SECTION_DESCRIPTIONS: Record<string, string> = {
  hero: 'Encabezado con titular principal, propuesta de valor, badges y enlaces de acción.',
  about: 'Sección de filosofía profesional y 3 pilares clave con listados de habilidades.',
  projects: 'Cuadrícula con proyectos destacados, enlaces a apps, tags de tecnología e iconos.',
  music: 'Espacio artístico: discografía, producción musical, enlace a Apple Music y gear de estudio.',
  resume: 'Línea de tiempo cronológica con experiencia laboral, empresas, logros y skills.',
  testimonials: 'Carrusel infinito interactivo con testimonios reales y enlaces a LinkedIn.',
};

export const SectionsManager: React.FC = () => {
  const { data, updateSections, toggleSectionVisibility } = useSiteData();

  const sortedSections = [...data.sections].sort((a, b) => a.order - b.order);

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === sortedSections.length - 1)
    ) {
      return;
    }

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const currentList = [...sortedSections];
    
    // Swap items
    const temp = currentList[index];
    currentList[index] = currentList[targetIndex];
    currentList[targetIndex] = temp;

    // Reassign order numbers
    const updated = currentList.map((item, idx) => ({
      ...item,
      order: idx + 1,
    }));

    updateSections(updated);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary-500" />
              Gestión de Estructura y Visibilidad de Secciones
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Activa, desactiva o reordena las secciones que se muestran públicamente en la landing page.
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 text-xs font-medium border border-primary-200 dark:border-primary-800/60">
            <CheckCircle2 className="w-4 h-4 text-primary-500" />
            {data.sections.filter(s => s.visible).length} de {data.sections.length} secciones visibles
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-4">
        {sortedSections.map((section, index) => {
          const Icon = SECTION_ICONS[section.id] || Layers;
          const isFirst = index === 0;
          const isLast = index === sortedSections.length - 1;

          return (
            <div
              key={section.id}
              className={`
                p-5 rounded-2xl border transition-all duration-200 backdrop-blur-md
                ${section.visible 
                  ? 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary-300 dark:hover:border-primary-800' 
                  : 'bg-slate-50/70 dark:bg-slate-950/40 border-dashed border-slate-300 dark:border-slate-800 opacity-60'}
              `}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Section Info */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 text-xs font-mono font-bold text-slate-400 text-center">
                      #{section.order}
                    </span>
                    <div className={`p-3 rounded-xl ${section.visible ? 'bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {section.name}
                      </h3>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${section.visible ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                        {section.visible ? 'Visible' : 'Oculta'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                      {SECTION_DESCRIPTIONS[section.id] || 'Sección de la página web.'}
                    </p>
                  </div>
                </div>

                {/* Actions: Reorder & Toggle Visibility */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {/* Reorder Buttons */}
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800">
                    <button
                      onClick={() => moveSection(index, 'up')}
                      disabled={isFirst}
                      className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-slate-600 dark:text-slate-300 transition-colors"
                      title="Subir sección"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
                    <button
                      onClick={() => moveSection(index, 'down')}
                      disabled={isLast}
                      className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent text-slate-600 dark:text-slate-300 transition-colors"
                      title="Bajar sección"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Toggle Visibility */}
                  <button
                    onClick={() => toggleSectionVisibility(section.id)}
                    className={`
                      flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors
                      ${section.visible
                        ? 'bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/40 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 border border-slate-200 dark:border-slate-700'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'}
                    `}
                  >
                    {section.visible ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Ocultar</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Mostrar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
