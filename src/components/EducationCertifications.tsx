import React from 'react';
import { GraduationCap, Award, ShieldCheck, Landmark } from 'lucide-react';
import { Language, educationListByLang, certifications, uiTranslations } from '../data/cvData';

interface EducationCertificationsProps {
  lang: Language;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ lang }) => {
  const educationList = educationListByLang[lang];
  const t = uiTranslations[lang].education;

  return (
    <section id="education" className="py-16 bg-white border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Certifications Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
                  {t.certBadge}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t.certTitle}
                </h3>
              </div>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex items-start gap-3.5"
                >
                  <ShieldCheck className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 mb-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-medium">
                      {t.certIssuer} <span className="text-zinc-900 font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
                  {t.eduBadge}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t.eduTitle}
                </h3>
              </div>
            </div>

            <div className="space-y-3.5">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-all flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <Landmark className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 mb-0.5">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-zinc-500 font-medium">
                        {edu.institution} • <span className="text-zinc-700">{edu.location}</span>
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


