import React from 'react';
import { 
  LayoutDashboard, 
  User, 
  Sparkles, 
  BookOpen, 
  Briefcase, 
  Music, 
  MessageSquareQuote, 
  Languages, 
  Database,
  Cloud,
  ShieldCheck,
  ChevronRight,
  Code
} from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export type AdminTab = 
  | 'sections'
  | 'profile'
  | 'hero'
  | 'about'
  | 'projects'
  | 'music'
  | 'resume'
  | 'testimonials'
  | 'translations'
  | 'database'
  | 'security'
  | 'backup';

interface AdminSidebarProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  setActiveTab,
  isOpenMobile,
  setIsOpenMobile
}) => {
  const { data, isCloudConnected } = useSiteData();

  const activeProjects = data.projects.filter(p => p.visible !== false).length;
  const totalJobs = data.jobIds.length;
  const totalTestimonials = (data.translations['es']?.testimonials || []).length;
  const activeSections = data.sections.filter(s => s.visible).length;

  const tabs: { id: AdminTab; label: string; icon: React.FC<{ className?: string }>; badge?: string | number }[] = [
    { id: 'sections', label: 'Estructura y Secciones', icon: LayoutDashboard, badge: `${activeSections}/${data.sections.length}` },
    { id: 'profile', label: 'Perfil y Contacto', icon: User },
    { id: 'hero', label: 'Hero / Portada', icon: Sparkles },
    { id: 'about', label: 'Filosofía y Habilidades', icon: BookOpen },
    { id: 'projects', label: 'Proyectos y Portafolio', icon: Code, badge: `${activeProjects}` },
    { id: 'music', label: 'Música y Producción', icon: Music },
    { id: 'resume', label: 'Experiencia y CV', icon: Briefcase, badge: totalJobs },
    { id: 'testimonials', label: 'Testimonios', icon: MessageSquareQuote, badge: totalTestimonials },
    { id: 'translations', label: 'Textos y Traducciones', icon: Languages },
    { id: 'database', label: 'Base de Datos Cloud', icon: Cloud, badge: isCloudConnected ? '🟢 Live' : '🟡 Setup' },
    { id: 'security', label: 'Seguridad y Acceso', icon: ShieldCheck },
    { id: 'backup', label: 'Copia de Seguridad / JSON', icon: Database },
  ];

  const handleSelect = (tab: AdminTab) => {
    setActiveTab(tab);
    setIsOpenMobile(false);
  };

  return (
    <aside
      className={`
        fixed md:sticky top-0 md:top-[69px] left-0 z-50 md:z-20
        w-72 h-screen md:h-[calc(100vh-69px)]
        bg-white dark:bg-slate-900/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800
        p-4 flex flex-col justify-between overflow-y-auto transition-transform duration-300
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
    >
      <div>
        <div className="mb-6 px-3 py-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navegación</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">franciscocarle.com</span>
        </div>

        <nav className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleSelect(tab.id)}
                className={`
                  w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group
                  ${isActive 
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md shadow-primary-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'}
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-primary-500'} transition-colors`} />
                  <span>{tab.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {tab.badge !== undefined && (
                    <span 
                      className={`text-[11px] font-mono px-1.5 py-0.5 rounded-md ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-white/80 translate-x-0.5' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`} />
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">✨ Modificaciones en Vivo</p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-relaxed">
            Cualquier cambio se guarda al instante y actualiza la landing page.
          </p>
        </div>
      </div>
    </aside>
  );
};
