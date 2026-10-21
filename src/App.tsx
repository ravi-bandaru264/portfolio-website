import React from 'react';
import { Navbar } from './components/Navbar';
import { DataParticleBackground } from './components/DataParticleBackground';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#07111F] text-[#F4F8FF] overflow-x-hidden selection:bg-[#168BFF]/30 selection:text-[#36D9FF]">
      <DataParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
