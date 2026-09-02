import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, contactDataByLang, uiTranslations } from '../data/cvData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const contact = contactDataByLang[lang];
  const t = uiTranslations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-extrabold text-xs">
                AZ
              </div>
              <span className="font-bold text-base text-zinc-900 tracking-tight">
                {contact.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              {contact.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-600 font-medium">
            <a href={`mailto:${contact.email}`} className="hover:text-black transition-colors">
              {contact.email}
            </a>
            <span>•</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-black transition-colors">
              {contact.phone}
            </a>
            <span>•</span>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
              LinkedIn
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 px-3.5 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 hover:bg-zinc-200 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer shadow-2xs"
          >
            <span>{t.top}</span>
            <ArrowUp className="w-4 h-4 text-zinc-700" />
          </button>
        </div>

        <div className="pt-6 text-center text-xs text-zinc-400 font-medium">
          © {new Date().getFullYear()} Atef Zoiaidi. {t.rights}
        </div>


      </div>
    </footer>
  );
};

