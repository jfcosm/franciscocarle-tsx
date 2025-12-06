// Version 1.5
import React, { useState, useEffect } from 'react';
    import { Menu, X, Code, Music, Sun, Moon, Globe, MessageCircle } from 'lucide-react';
    import { NAV_ITEMS, TRANSLATIONS, PROFILE } from '../constants';
    import { LanguageCode } from '../types';
    
    interface HeaderProps {
      isDark: boolean;
      toggleTheme: () => void;
      lang: LanguageCode;
      setLang: (lang: LanguageCode) => void;
    }
    
    const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, lang, setLang }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [langMenuOpen, setLangMenuOpen] = useState(false);
    
      const t = TRANSLATIONS[lang].nav;
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const handleWhatsAppClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const message = "Hola, te contacto desde franciscocarle.com";
        const url = `https://wa.me/${PROFILE.phone.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    
      return (
        <header 
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Code className="w-6 h-6 text-primary-600 dark:text-primary-400 absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0" />
                <Music className="w-6 h-6 text-secondary-600 dark:text-secondary-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400">
                Francisco<span className="font-light">Carle</span>
              </span>
            </a>
    
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.key} 
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t[item.key]}
                </a>
              ))}
              
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>
    
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
    
              {/* Lang Selector */}
              <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center gap-1"
                >
                  <Globe className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">{lang}</span>
                </button>
                
                {langMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-2 max-h-64 overflow-y-auto">
                    {Object.keys(TRANSLATIONS).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code as LanguageCode);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${lang === code ? 'text-primary-600 dark:text-primary-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        {code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>
    
              {/* WhatsApp Button */}
              <a 
                href="#"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-black bg-[#25D366] rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/10"
              >
                <MessageCircle className="w-4 h-4" />
                {t.contact_btn}
              </a>
            </nav>
    
            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center gap-4">
               <button 
                onClick={toggleTheme}
                className="p-1 text-slate-600 dark:text-slate-400"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className="text-slate-800 dark:text-slate-300 hover:text-primary-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
    
          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.key} 
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary-500 py-2 border-b border-slate-100 dark:border-slate-800/50"
                  onClick={() => setIsOpen(false)}
                >
                  {t[item.key]}
                </a>
              ))}
              
               <div className="py-2 border-b border-slate-100 dark:border-slate-800/50">
                  <p className="text-xs text-slate-400 mb-2 uppercase">Idioma / Language</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(TRANSLATIONS).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code as LanguageCode);
                          setIsOpen(false);
                        }}
                        className={`px-2 py-1 text-xs rounded border ${lang === code ? 'bg-primary-500 text-white border-primary-500' : 'border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'}`}
                      >
                        {code.toUpperCase()}
                      </button>
                    ))}
                  </div>
               </div>
    
              <a 
                href="#"
                onClick={(e) => { handleWhatsAppClick(e); setIsOpen(false); }}
                className="w-full text-center px-4 py-3 text-sm font-bold text-black bg-[#25D366] rounded-xl"
              >
                {t.contact_btn}
              </a>
            </div>
          )}
        </header>
      );
    };
    
    export default Header;