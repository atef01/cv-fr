import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, CheckCircle, Code } from 'lucide-react';
import { experiences } from '../data/cvData';

interface ExperienceSectionProps {
  selectedTechFilter: string | null;
  onClearFilter: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ selectedTechFilter, onClearFilter }) => {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const filteredExperiences = selectedTechFilter
    ? experiences.filter(exp => 
        exp.technologies.some(tech => tech.toLowerCase().includes(selectedTechFilter.toLowerCase())) ||
        exp.highlights.some(h => h.toLowerCase().includes(selectedTechFilter.toLowerCase())) ||
        exp.role.toLowerCase().includes(selectedTechFilter.toLowerCase())
      )
    : experiences;

  return (
    <section id="experiences" className="py-16 bg-zinc-50/50 border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4 text-zinc-700" />
              Parcours Professionnel
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Expériences Professionnelles
            </h2>
          </div>

          {selectedTechFilter && (
            <div className="flex items-center gap-2 bg-white border border-zinc-300 px-3 py-1.5 rounded-lg text-xs text-zinc-800 shadow-2xs">
              <span>Filtré par: <strong className="text-zinc-900 font-bold">#{selectedTechFilter}</strong></span>
              <button 
                onClick={onClearFilter}
                className="ml-2 font-bold hover:text-black text-zinc-600 underline cursor-pointer"
              >
                Effacer
              </button>
            </div>
          )}
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div 
                key={exp.id} 
                className={`bg-white rounded-2xl border transition-all ${
                  isExpanded ? 'border-zinc-300 shadow-sm ring-1 ring-zinc-200' : 'border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {/* Header Card */}
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-semibold">
                        {exp.period}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                          Poste Actuel / Récent
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors tracking-tight">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-500 text-xs mt-2 font-medium">
                      <span className="text-zinc-900 font-bold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-zinc-600">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.location}
                      </span>
                      {exp.companyUrl && (
                        <>
                          <span>•</span>
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-blue-600 hover:underline font-semibold"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{exp.companyUrl.replace('https://', '')}</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-3 border-t border-zinc-100 space-y-5">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Missions & Réalisations Clés :
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Badges */}
                    <div className="pt-4 border-t border-zinc-100">
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-zinc-600" />
                        Environnement Technique :
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => {
                          const isMatch = selectedTechFilter && tech.toLowerCase().includes(selectedTechFilter.toLowerCase());
                          return (
                            <span 
                              key={tech} 
                              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                                isMatch 
                                  ? 'bg-zinc-900 text-white font-bold shadow-xs' 
                                  : 'bg-zinc-100 text-zinc-800 border border-zinc-200/80'
                              }`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
