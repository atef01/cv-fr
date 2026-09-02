import React, { useState } from 'react';
import { Download, Menu, X, Globe } from 'lucide-react';
import { Language, uiTranslations, contactDataByLang } from '../data/cvData';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiTranslations[lang].nav;
  const contact = contactDataByLang[lang];

  const navItems = [
    { id: 'about', label: t.about },
    { id: 'experiences', label: t.experiences },
    { id: 'projects', label: t.projects },
    { id: 'skills', label: t.skills },
    { id: 'education', label: t.education },
    { id: 'ai-assistant', label: t.aiAssistant }
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => scrollTo('about')} 
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-extrabold text-sm shadow-xs group-hover:bg-black transition-colors">
            AZ
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base text-zinc-900 group-hover:text-black transition-colors tracking-tight">
              {contact.name}
            </h1>
            <p className="text-[11px] text-zinc-500 font-medium hidden sm:block">
              {contact.title}
            </p>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/90 p-1 rounded-full border border-zinc-200/80">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeSection === item.id
                  ? 'bg-white text-zinc-900 font-semibold shadow-xs border border-zinc-200/80'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions (Language Switcher, Download CV & Mobile Toggle) */}
        <div className="flex items-center gap-2">
          
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-zinc-100 p-1 rounded-lg border border-zinc-200">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'fr'
                  ? 'bg-white text-zinc-900 shadow-2xs'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="Version Française"
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-zinc-900 shadow-2xs'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
              title="English Version"
            >
              EN
            </button>
          </div>

          <a
            href={contact.pdfUrl}
            download="Atef_Zoiaidi_CV.pdf"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-black text-white font-semibold text-xs transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.downloadCv}</span>
            <span className="sm:hidden">{t.cvShort}</span>
          </a>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-4 space-y-1 animate-fade-in shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-zinc-100 text-zinc-900 font-bold'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};


