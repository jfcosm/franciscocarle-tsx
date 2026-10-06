import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MusicSection from './components/Music';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Background from './components/Background';
import AdminPanel from './components/admin/AdminPanel';
import { AdminLogin } from './components/admin/AdminLogin';
import { LanguageCode } from './types';
import { SiteDataProvider, useSiteData } from './context/SiteDataContext';
import { isAuthenticated, logoutAdmin } from './services/authService';
import { Settings } from 'lucide-react';

const LandingPageContent: React.FC<{
  isDark: boolean;
  toggleTheme: () => void;
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  onNavigateAdmin: () => void;
}> = ({ isDark, toggleTheme, lang, setLang, onNavigateAdmin }) => {
  const { data } = useSiteData();

  // Sort sections according to configured order
  const sortedSections = [...data.sections].sort((a, b) => a.order - b.order);

  const renderSection = (id: string) => {
    switch (id) {
      case 'hero':
        return <Hero key="hero" lang={lang} />;
      case 'about':
        return <About key="about" lang={lang} />;
      case 'projects':
        return <Projects key="projects" lang={lang} />;
      case 'music':
        return <MusicSection key="music" lang={lang} />;
      case 'resume':
        return <Resume key="resume" lang={lang} />;
      case 'testimonials':
        return <Testimonials key="testimonials" lang={lang} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200 selection:bg-primary-500/30 selection:text-white relative">
      <Background />

      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        setLang={setLang}
        onNavigateAdmin={onNavigateAdmin}
      />

      <main>
        {sortedSections.map((section) => (
          section.visible ? renderSection(section.id) : null
        ))}
      </main>

      <Footer lang={lang} onNavigateAdmin={onNavigateAdmin} />

      {/* Floating Admin Quick Access Button */}
      <button
        onClick={onNavigateAdmin}
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-primary-600 dark:hover:bg-primary-600 text-white shadow-xl backdrop-blur-md border border-slate-700 transition-all duration-300 hover:scale-110 group"
        title="Abrir Panel de Administración (/admin-panel)"
        aria-label="Admin Panel"
      >
        <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
      </button>
    </div>
  );
};

const AppInner: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<LanguageCode>('es');
  const [isAuthed, setIsAuthed] = useState<boolean>(() => isAuthenticated());
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setIsAuthed(isAuthenticated());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setIsAuthed(isAuthenticated());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDark(!isDark);

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthed(false);
  };

  const isAdminRoute = 
    currentPath === '/admin-panel' || 
    currentPath.startsWith('/admin') || 
    window.location.hash === '#admin-panel' ||
    window.location.search.includes('admin=true');

  if (isAdminRoute) {
    if (!isAuthed) {
      return (
        <AdminLogin
          onLoginSuccess={() => setIsAuthed(true)}
          onNavigateHome={() => navigateTo('/')}
        />
      );
    }

    return (
      <AdminPanel
        isDark={isDark}
        toggleTheme={toggleTheme}
        onNavigateHome={() => navigateTo('/')}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <LandingPageContent
      isDark={isDark}
      toggleTheme={toggleTheme}
      lang={lang}
      setLang={setLang}
      onNavigateAdmin={() => navigateTo('/admin-panel')}
    />
  );
};

const App: React.FC = () => {
  return (
    <SiteDataProvider>
      <AppInner />
    </SiteDataProvider>
  );
};

export default App;