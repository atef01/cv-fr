import React, { useState } from 'react';
import { Rocket, ExternalLink, Sparkles, Code, Filter, Tag } from 'lucide-react';
import { projects } from '../data/cvData';
import { Project } from '../types';

interface ProjectsSectionProps {
  selectedTechFilter: string | null;
  onSelectTechFilter: (tech: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ selectedTechFilter, onSelectTechFilter }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'IA & NLP', 'E-commerce', 'Web & Cloud'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = activeCategory === 'Tous' || proj.category === activeCategory;
    const matchesTech = !selectedTechFilter || proj.technologies.some(t => t.toLowerCase().includes(selectedTechFilter.toLowerCase()));
    return matchesCategory && matchesTech;
  });

  return (
    <section id="projects" className="py-16 bg-white border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Rocket className="w-4 h-4 text-zinc-700" />
              Réalisations Clés
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Projets Majeurs & Innovations IA
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-900 shadow-xs font-bold border border-zinc-200/80'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all p-6 flex flex-col justify-between group shadow-xs hover:shadow-sm"
            >
              <div>
                {/* Header Category & Period */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-800 border border-zinc-200 text-[11px] font-bold">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors mb-2 tracking-tight">
                  {project.title}
                </h3>

                {project.clientOrContext && (
                  <p className="text-xs text-zinc-500 font-semibold mb-3 flex items-center gap-1">
                    <span>Context:</span>
                    <span className="text-zinc-800">{project.clientOrContext}</span>
                  </p>
                )}

                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-xs text-zinc-600 leading-relaxed flex items-start gap-2">
                      <span className="text-zinc-400 font-bold">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Link */}
              <div className="pt-4 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => onSelectTechFilter(tech)}
                      className="px-2 py-0.5 rounded bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-700 text-[11px] font-medium border border-zinc-200 transition-colors cursor-pointer"
                    >
                      #{tech}
                    </button>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-black hover:underline"
                  >
                    <span>Visiter le projet</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
