import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';
import { Language } from './data/cvData';

export function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('about');
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  const handleSelectTechFilter = (tech: string) => {
    setSelectedTechFilter(tech);
    const expElement = document.getElementById('experiences');
    if (expElement) {
      expElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearFilter = () => {
    setSelectedTechFilter(null);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          lang={lang}
          onSelectTechFilter={handleSelectTechFilter}
        />

        <ExperienceSection 
          lang={lang}
          selectedTechFilter={selectedTechFilter}
          onClearFilter={handleClearFilter}
        />

        <ProjectsSection 
          lang={lang}
          selectedTechFilter={selectedTechFilter}
          onSelectTechFilter={handleSelectTechFilter}
        />

        <SkillsSection 
          lang={lang}
          selectedTechFilter={selectedTechFilter}
          onSelectTechFilter={handleSelectTechFilter}
        />

        <EducationCertifications 
          lang={lang}
        />

        <AiAssistant 
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang}
      />

    </div>
  );
}

export default App;


