import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { AiAssistant } from './components/AiAssistant';
import { Footer } from './components/Footer';

export function App() {
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
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero 
          onSelectTechFilter={handleSelectTechFilter}
        />

        <ExperienceSection 
          selectedTechFilter={selectedTechFilter}
          onClearFilter={handleClearFilter}
        />

        <ProjectsSection 
          selectedTechFilter={selectedTechFilter}
          onSelectTechFilter={handleSelectTechFilter}
        />

        <SkillsSection 
          selectedTechFilter={selectedTechFilter}
          onSelectTechFilter={handleSelectTechFilter}
        />

        <EducationCertifications />

        <AiAssistant />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;

