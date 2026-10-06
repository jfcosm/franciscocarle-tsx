import React, { useState } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminSidebar, AdminTab } from './AdminSidebar';
import { SectionsManager } from './SectionsManager';
import { ProfileEditor } from './ProfileEditor';
import { HeroEditor } from './HeroEditor';
import { AboutEditor } from './AboutEditor';
import { ProjectsEditor } from './ProjectsEditor';
import { MusicEditor } from './MusicEditor';
import { ResumeEditor } from './ResumeEditor';
import { TestimonialsEditor } from './TestimonialsEditor';
import { TranslationsEditor } from './TranslationsEditor';
import { BackupManager } from './BackupManager';
import { DatabaseConfig } from './DatabaseConfig';
import { SecurityEditor } from './SecurityEditor';
import { Menu, CheckCircle2 } from 'lucide-react';

interface AdminPanelProps {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigateHome: () => void;
  onLogout?: () => void;
}

const TAB_TITLES: Record<AdminTab, string> = {
  sections: 'Estructura y Secciones',
  profile: 'Perfil y Contacto',
  hero: 'Hero / Portada',
  about: 'Filosofía y Habilidades',
  projects: 'Proyectos y Portafolio',
  music: 'Música y Producción',
  resume: 'Experiencia y CV',
  testimonials: 'Testimonios',
  translations: 'Textos y Traducciones',
  backup: 'Copia de Seguridad y JSON',
  database: 'Base de Datos Cloud (Firestore)',
  security: 'Seguridad y Acceso',
};

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isDark,
  toggleTheme,
  onNavigateHome,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('sections');
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'sections':
        return <SectionsManager />;
      case 'profile':
        return <ProfileEditor />;
      case 'hero':
        return <HeroEditor />;
      case 'about':
        return <AboutEditor />;
      case 'projects':
        return <ProjectsEditor />;
      case 'music':
        return <MusicEditor />;
      case 'resume':
        return <ResumeEditor />;
      case 'testimonials':
        return <TestimonialsEditor />;
      case 'translations':
        return <TranslationsEditor />;
      case 'backup':
        return <BackupManager />;
      case 'database':
        return <DatabaseConfig onShowToast={showToast} />;
      case 'security':
        return <SecurityEditor onShowToast={showToast} />;
      default:
        return <SectionsManager />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold shadow-2xl animate-fade-in-up border border-slate-700 dark:border-slate-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <AdminHeader
        activeTabTitle={TAB_TITLES[activeTab]}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onNavigateHome={onNavigateHome}
        onLogout={onLogout}
        onShowToast={showToast}
      />

      {/* Mobile Toggle Button */}
      <div className="md:hidden px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200"
        >
          <Menu className="w-4 h-4" />
          <span>Menú del Panel ({TAB_TITLES[activeTab]})</span>
        </button>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpenMobile={isOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
        />

        {/* Backdrop for mobile */}
        {isOpenMobile && (
          <div
            onClick={() => setIsOpenMobile(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          />
        )}

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-5xl">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};
export default AdminPanel;
