/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LearningTopics } from './components/LearningTopics';
import { ReformMethod } from './components/ReformMethod';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { TopicCurriculumDrawer } from './components/TopicCurriculumDrawer';
import {
  CheckoutAndBookingModal,
  CheckoutModalMode,
} from './components/CheckoutAndBookingModal';
import { LearningTopic } from './data/reformData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedTopic, setSelectedTopic] = useState<LearningTopic | null>(null);
  const [checkoutMode, setCheckoutMode] = useState<CheckoutModalMode>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'method', 'guide', 'consultation', 'about', 'faq'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090807] text-[#E9D8C5] flex flex-col selection:bg-[#DCC0A3] selection:text-[#090807]">
      {/* SECTION 1 — Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* SECTION 2 — Cinematic Hero */}
        <HeroSection
          onExplorePrograms={() => scrollToSection('programs')}
          onSelectGuide={() => setCheckoutMode('guide')}
          onSelectConsultation={() => setCheckoutMode('consultation')}
        />

        {/* SECTION 4 — What You'll Learn */}
        <LearningTopics onSelectTopic={(topic) => setSelectedTopic(topic)} />

        {/* SECTION 5 — The REFORM Method */}
        <ReformMethod />

        {/* SECTION 6 — REFORM Programs */}
        <ProgramsSection
          onSelectGuide={() => setCheckoutMode('guide')}
          onSelectConsultation={() => setCheckoutMode('consultation')}
        />

        {/* SECTION 7 — About REFORM & Quick FAQ */}
        <AboutSection />
      </main>

      {/* Quiet Editorial Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Slide-Over Topic Curriculum Drawer */}
      <TopicCurriculumDrawer
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
        onSelectTopic={(topic) => setSelectedTopic(topic)}
        onGetGuide={() => setCheckoutMode('guide')}
        onBookConsultation={() => setCheckoutMode('consultation')}
      />

      {/* Interactive WhatsApp Guide Order & Consultation Booking Modal */}
      <CheckoutAndBookingModal
        mode={checkoutMode}
        onClose={() => setCheckoutMode(null)}
        onSwitchMode={(newMode) => setCheckoutMode(newMode)}
      />
    </div>
  );
}
