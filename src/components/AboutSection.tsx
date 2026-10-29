import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/reformData';
import { FAQAccordion } from './FAQAccordion';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#090807] border-b border-[#26221E] py-9 sm:py-12"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-10 items-start">
          {/* Left Column: Founder Portrait + FINAL NOTE */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            {/* Portrait + Mobile Title Lockup */}
            <div className="flex items-center sm:block gap-4 w-full sm:w-auto">
              <div className="w-[96px] sm:w-[128px] h-[132px] sm:h-[174px] shrink-0 rounded-[6px] overflow-hidden border border-[#26221E] bg-[#12100E]">
                <img
                  src="/assets/aistudio/IMG-20261029-WA0005_16ecbd49.jpg"
                  alt="Faheem, founder of REFORM"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="sm:hidden">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3] mb-1">
                  FINAL NOTE
                </p>
                <h2 className="font-editorial text-[28px] leading-[1.08] text-[#E9D8C5] font-normal mb-1">
                  Build Yourself With Intention.
                </h2>
              </div>
            </div>

            {/* Copy & Instagram CTA */}
            <div className="flex-1 w-full">
              <p className="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3] mb-1">
                FINAL NOTE
              </p>

              <h2 className="hidden sm:block font-editorial text-[28px] sm:text-[32px] leading-[1.1] text-[#E9D8C5] font-normal mb-2.5">
                Build Yourself With Intention.
              </h2>

              <div className="space-y-2.5 text-[13px] leading-[1.62] text-[#B6ADA4] font-light mb-3.5">
                <p>
                  Your best results will come from understanding your goals, making
                  informed decisions, and consistently applying the fundamentals.
                </p>
                <p>REFORM exists to make that process clearer.</p>
                <p className="text-[#E9D8C5] font-medium">
                  Refine your look. Rebuild your confidence. REFORM.
                </p>
              </div>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[40px] inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[6px] sm:rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] active:scale-[0.99] text-[#090807] text-[13px] sm:text-[12px] font-medium tracking-[0.01em] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9D8C5]"
              >
                <Instagram className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.9} />
                <span>Follow Faheem on Instagram</span>
                <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Right Column: FREQUENTLY ASKED QUESTIONS */}
          <div className="lg:col-span-7">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};
