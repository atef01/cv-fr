import React, { useState } from 'react';
import { Cpu, Search, CheckCircle2, Sparkles, Code2, Layers, BrainCircuit, ShoppingCart, Webhook, Cloud, Database, Bot } from 'lucide-react';
import { skillCategories } from '../data/cvData';

interface SkillsSectionProps {
  selectedTechFilter: string | null;
  onSelectTechFilter: (tech: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ selectedTechFilter, onSelectTechFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-zinc-800" />;
      case 'Layers': return <Layers className="w-5 h-5 text-zinc-800" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-zinc-800" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-zinc-800" />;
      case 'Webhook': return <Webhook className="w-5 h-5 text-zinc-800" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-zinc-800" />;
      case 'Database': return <Database className="w-5 h-5 text-zinc-800" />;
      case 'Bot': return <Bot className="w-5 h-5 text-zinc-800" />;
      default: return <Cpu className="w-5 h-5 text-zinc-800" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-zinc-50/50 border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-zinc-700" />
              Stack & Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Environnement Technologique
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text"
              placeholder="Rechercher un langage, framework..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:border-zinc-400 placeholder-zinc-400 shadow-2xs"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const filteredSkills = cat.skills.filter(s => 
              s.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-zinc-100 border border-zinc-200">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 tracking-tight">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {filteredSkills.map((skill) => {
                      const isSelected = selectedTechFilter && skill.toLowerCase().includes(selectedTechFilter.toLowerCase());

                      return (
                        <button
                          key={skill}
                          onClick={() => onSelectTechFilter(skill)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            isSelected 
                              ? 'bg-zinc-900 text-white font-bold shadow-xs' 
                              : 'bg-zinc-100 text-zinc-800 border border-zinc-200/80 hover:bg-zinc-900 hover:text-white'
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] text-zinc-500 font-medium flex items-center justify-between">
                  <span>{filteredSkills.length} compétences</span>
                  <span className="text-zinc-900 font-semibold">Expertise maîtrisée</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
