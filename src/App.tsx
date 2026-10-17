/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TechnologySection } from './components/TechnologySection';
import { TargetUsersSection } from './components/TargetUsersSection';
import { SafetySection } from './components/SafetySection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { FutureScopeSection } from './components/FutureScopeSection';
import { ImpactAndSdgSection } from './components/ImpactAndSdgSection';
import { ProjectStatusSection } from './components/ProjectStatusSection';
import { CtaAndContactSection } from './components/CtaAndContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Accessible font size scaling class
  const fontSizeClass = 
    fontSize === 'xlarge' 
      ? 'text-lg leading-relaxed' 
      : fontSize === 'large' 
      ? 'text-base leading-normal' 
      : 'text-sm leading-normal';

  return (
    <div 
      className={`min-h-screen bg-slate-50 text-slate-800 ${fontSizeClass} ${
        highContrast ? 'high-contrast-mode' : ''
      }`}
    >
      {/* Accessible Navigation Bar with quick accessibility toggles */}
      <Navbar
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. How It Works Section */}
        <HowItWorksSection />

        {/* 6. Technology Section */}
        <TechnologySection />

        {/* 7. Target Users Section */}
        <TargetUsersSection />

        {/* 8. Safety / Responsible Use Section */}
        <SafetySection />

        {/* 9. Differentiation Section */}
        <DifferentiationSection />

        {/* 10. Future Scope Section */}
        <FutureScopeSection />

        {/* 11 & 12. Impact & SDG Section */}
        <ImpactAndSdgSection />

        {/* 13. Project Status Section */}
        <ProjectStatusSection />

        {/* 14. CTA & Contact Section */}
        <CtaAndContactSection onOpenDemoModal={() => setDemoModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Request Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
