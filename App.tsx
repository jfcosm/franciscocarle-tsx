// Version 2.0
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import MusicSection from './components/Music';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Background from './components/Background';
import { PROFILE } from './constants';
import { LanguageCode } from './types';

const App: React.FC = () => {
  // Theme State
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  
  // Language State
  const [lang, setLang] = useState<LanguageCode>('es');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-200 selection:bg-primary-500/30 selection:text-white relative">
      <Background />
      
      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        setLang={setLang} 
      />
      
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <MusicSection lang={lang} />
        <Resume lang={lang} />
      </main>
      
      <Footer lang={lang} />
    </div>
  );
};

export default App;