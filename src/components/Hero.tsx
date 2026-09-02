import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Sparkles, Award, GraduationCap, Briefcase } from 'lucide-react';
import { Language, uiTranslations, contactDataByLang } from '../data/cvData';

interface HeroProps {
  lang: Language;
  onOpenPdf?: () => void;
  onSelectTechFilter: (tech: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onSelectTechFilter }) => {
  const contact = contactDataByLang[lang];
  const t = uiTranslations[lang].hero;

  const topTechnologies = [
    "Java", "Spring Boot", "Angular", "Python", "Django", "FastAPI", 
    "Agents IA", "Milvus", "CLIP", "PrestaShop", "Shopify", "Docker"
  ];

  return (
    <section id="about" className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 bg-white bg-grid-pattern border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="truncate">{t.available}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight mb-3 sm:mb-4">
              {contact.name}
            </h1>
            
            <p className="text-lg sm:text-2xl font-bold text-zinc-800 tracking-tight mb-4 sm:mb-5">
              {contact.subtitle}
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-3xl font-normal">
              {lang === 'fr' ? (
                <>
                  Fort de plus de 8 ans d'expérience dans la conception, le développement et la modernisation d'applications d'entreprise complexes. Spécialisé dans l'architecture <span className="text-zinc-900 font-semibold">Java & Python (APIs REST, Microservices)</span>, les interfaces modernes <span className="text-zinc-900 font-semibold">Angular</span>, le développement <span className="text-zinc-900 font-semibold">E-commerce</span> (PrestaShop, Shopify, Magento) et l'intégration de systèmes intelligents d'
                  <span className="text-zinc-900 font-semibold">Intelligence Artificielle & Recherche Vectorielle</span> (LLM, LangChain4j, Milvus, SpaCy).
                </>
              ) : (
                <>
                  Over 8 years of experience in designing, developing, and modernizing complex enterprise applications. Specialized in <span className="text-zinc-900 font-semibold">Java & Python architecture (REST APIs, Microservices)</span>, modern <span className="text-zinc-900 font-semibold">Angular</span> interfaces, <span className="text-zinc-900 font-semibold">E-commerce</span> development (PrestaShop, Shopify, Magento), and integrating intelligent <span className="text-zinc-900 font-semibold">AI & Vector Search</span> systems (LLM, LangChain4j, Milvus, SpaCy).
                </>
              )}
            </p>

            {/* Contact Pills Grid */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8 text-xs font-medium">
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 transition-all max-w-full overflow-hidden text-ellipsis"
              >
                <Mail className="w-4 h-4 text-zinc-600 shrink-0" />
                <span className="truncate">{contact.email}</span>
              </a>

              <a 
                href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 transition-all"
              >
                <Phone className="w-4 h-4 text-zinc-600 shrink-0" />
                <span>{contact.phone}</span>
              </a>

              <div className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-zinc-100 text-zinc-800 border border-zinc-200">
                <MapPin className="w-4 h-4 text-zinc-600 shrink-0" />
                <span>{contact.location}</span>
              </div>

              <a 
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 border border-zinc-200 transition-all"
              >
                <Linkedin className="w-4 h-4 text-zinc-600 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Tech Tag Cloud */}
            <div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                {t.keyTechTitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {topTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => onSelectTechFilter(tech)}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-700 border border-zinc-200/80 text-xs font-medium transition-all cursor-pointer"
                  >
                    #{tech}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Metrics / Summary Card */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200 shadow-xs relative overflow-hidden">

              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-700" />
                {t.overviewTitle}
              </h3>

              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 text-white shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">{t.expMetric}</div>
                    <div className="text-xs text-zinc-500">{t.expMetricSub}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 text-white shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">{t.degreeMetric}</div>
                    <div className="text-xs text-zinc-500">{t.degreeMetricSub}</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-900 text-white shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-900">{t.certMetric}</div>
                    <div className="text-xs text-zinc-500">{t.certMetricSub}</div>
                  </div>
                </div>
              </div>

              {/* Action Button inside card: Direct Download */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col gap-2">
                <a
                  href={contact.pdfUrl}
                  download="Atef_Zoiaidi_CV.pdf"
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-zinc-300" />
                  <span>{t.downloadPdf}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


