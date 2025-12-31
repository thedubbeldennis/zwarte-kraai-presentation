import React, { useState, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Logo } from './components/Logo';
import { Intro } from './sections/Intro';
import { Problem } from './sections/Problem';
import { Solution } from './sections/Solution';
import { B2BValue } from './sections/B2BValue';
import { LifetimeValue } from './sections/LifetimeValue';
import { SmartTech } from './sections/SmartTech';
import { Automation } from './sections/Automation';
import { Dashboarding } from './sections/Dashboarding';
import { Tools } from './sections/Tools';
import { Beurzen } from './sections/Beurzen';
import { Training } from './sections/Training';
import { Packages } from './sections/Packages';
import { Security } from './sections/Security';
import { Proof } from './sections/Proof';
import { Team } from './sections/Team';
import { Clients } from './sections/Clients';
import { CTA } from './sections/CTA';

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const totalSections = 17;

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      if (index !== currentSection) {
        setCurrentSection(index);
      }
    }
  };

  const navigateToSection = (index: number) => {
    if (containerRef.current) {
      const target = index * window.innerHeight;
      containerRef.current.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-brand-purple text-white overflow-hidden">
      <Logo />

      <Navigation
        currentSection={currentSection}
        totalSections={totalSections}
        onNavigate={navigateToSection}
      />

      {/* Scroll Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        <div ref={el => sectionsRef.current[0] = el} className="snap-start w-full h-screen">
          <Intro />
        </div>
        <div ref={el => sectionsRef.current[1] = el} className="snap-start w-full h-screen">
          <Problem />
        </div>
        <div ref={el => sectionsRef.current[2] = el} className="snap-start w-full h-screen">
          <Solution />
        </div>
        <div ref={el => sectionsRef.current[3] = el} className="snap-start w-full h-screen">
          <B2BValue />
        </div>
        <div ref={el => sectionsRef.current[4] = el} className="snap-start w-full h-screen">
          <LifetimeValue />
        </div>
        <div ref={el => sectionsRef.current[5] = el} className="snap-start w-full h-screen">
          <SmartTech />
        </div>
        <div ref={el => sectionsRef.current[6] = el} className="snap-start w-full h-screen">
          <Automation />
        </div>
        <div ref={el => sectionsRef.current[7] = el} className="snap-start w-full h-screen">
          <Dashboarding />
        </div>
        <div ref={el => sectionsRef.current[8] = el} className="snap-start w-full h-screen">
          <Tools />
        </div>
        <div ref={el => sectionsRef.current[9] = el} className="snap-start w-full h-screen">
          <Beurzen />
        </div>
        <div ref={el => sectionsRef.current[10] = el} className="snap-start w-full h-screen">
          <Training />
        </div>
        <div ref={el => sectionsRef.current[11] = el} className="snap-start w-full h-screen">
          <Packages />
        </div>
        <div ref={el => sectionsRef.current[12] = el} className="snap-start w-full h-screen">
          <Security />
        </div>
        <div ref={el => sectionsRef.current[13] = el} className="snap-start w-full h-screen">
          <Proof />
        </div>
        <div ref={el => sectionsRef.current[14] = el} className="snap-start w-full h-screen">
          <Team />
        </div>
        <div ref={el => sectionsRef.current[15] = el} className="snap-start w-full h-screen">
          <Clients />
        </div>
        <div ref={el => sectionsRef.current[16] = el} className="snap-start w-full h-screen">
          <CTA />
        </div>
      </div>
    </div>
  );
}
