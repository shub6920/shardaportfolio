import React from 'react';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { AboutSection } from './sections/About';
import { SkillsSection } from './sections/Skills';
import { ExperienceSection } from './sections/Experience';
import { ProjectsSection } from './sections/Projects';
import { AchievementsSection } from './sections/Achievements';
import { ContactSection } from './sections/Contact';
import { Footer } from './sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080916] text-white selection:bg-[#8955FF]/30 selection:text-white">
      {/* Dynamic drifting background orbs & dot grid */}
      <BackgroundOrbs />

      {/* Sticky glass navbar */}
      <Navbar />

      {/* Main semantic content */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Semantic footer */}
      <Footer />
    </div>
  );
};

export default App;
