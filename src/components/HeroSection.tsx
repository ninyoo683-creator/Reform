import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExplorePrograms: () => void;
  onSelectGuide?: () => void;
  onSelectConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePrograms,
  onSelectGuide,
  onSelectConsultation,
}) => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#090807] border-b border-[#26221E] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* Top Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 py-7 sm:py-10 lg:py-12">
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between z-10">
            <div>
              {/* Eyebrow */}
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.23em] text-[#B6ADA4] mb-2.5 font-normal">
                REFORM
              </p>

              {/* Main Editorial Headline */}
              <h1 className="font-editorial text-[36px] sm:text-[50px] lg:text-[56px] xl:text-[62px] leading-[1.04] lg:leading-[1.02] tracking-[-0.015em] text-[#E9D8C5] font-normal mb-3 [text-wrap:balance]">
                Refine Your Look. Rebuild Your Confidence.
              </h1>

              {/* Sub-lead */}
              <p className="font-editorial italic text-[20px] sm:text-[22px] text-[#DCC0A3] mb-4">
                Your transformation starts with a plan.
              </p>

              {/* Supporting Copy */}
              <div className="space-y-3 text-[13.5px] sm:text-[14px] leading-[1.62] text-[#B6ADA4] max-w-[490px] mb-6 sm:mb-7 font-light">
                <p>
                  REFORM is a men&rsquo;s self-improvement and facial aesthetics
                  platform built to help you improve your appearance through
                  practical routines, evidence-informed guidance, and personalized
                  recommendations.
                </p>
                <p>
                  From skincare and haircare to grooming, style, and facial
                  aesthetics, learn how to make the most of what you have.
                </p>
              </div>

              {/* Primary CTA + Sub-links */}
              <div className="space-y-3 mb-2">
                <button
                  type="button"
                  onClick={onExplorePrograms}
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[44px] inline-flex items-center justify-center gap-3 px-6 py-3 rounded-[6px] sm:rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] active:scale-[0.99] text-[#090807] text-[13px] font-semibold tracking-[0.04em] uppercase transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9D8C5]"
                >
                  <span>START YOUR TRANSFORMATION</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>

                <div className="flex flex-wrap items-center gap-2 text-[12.5px] text-[#B6ADA4]">
                  <button
                    type="button"
                    onClick={onSelectGuide || onExplorePrograms}
                    className="hover:text-[#DCC0A3] underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Explore the Guide
                  </button>
                  <span aria-hidden="true">&middot;</span>
                  <button
                    type="button"
                    onClick={onSelectConsultation || onExplorePrograms}
                    className="hover:text-[#DCC0A3] underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Book a 1-to-1 Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center lg:justify-end">
            <div className="relative w-full rounded-[8px] overflow-hidden border border-[#26221E] bg-[#0B0A08] shadow-2xl">
              <img
                src="/assets/aistudio/file_00000000e88882118b7c23756b1ce44c_3142275b.png"
                alt="REFORM — Refine Your Look. Rebuild Your Confidence."
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain select-none block"
              />
            </div>
          </div>
        </div>

        {/* YOUR NEXT CHAPTER STARTS HERE Block */}
        <div className="border-t border-[#26221E] py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-6 space-y-3">
            <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.23em] text-[#DCC0A3]">
              YOUR NEXT CHAPTER STARTS HERE
            </p>
            <h2 className="font-editorial text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.08] text-[#E9D8C5] font-normal">
              Stop Guessing. Start Improving.
            </h2>
            <p className="text-[13.5px] leading-[1.62] text-[#B6ADA4] font-light">
              You don&rsquo;t need another random routine from social media. You need
              a structured approach that fits your face, lifestyle, and goals.
            </p>
            <p className="text-[13.5px] leading-[1.62] text-[#B6ADA4] font-light">
              REFORM helps you identify what to improve, understand what actually
              works, and build habits that produce consistent results over time.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 bg-[#100E0C] border border-[#26221E] rounded-[8px] p-5 sm:p-6">
            <ul className="space-y-2.5 text-[13px] text-[#E9D8C5]/90 font-light">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>Practical, structured self-improvement guidance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>Personalized routines based on your goals</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>Evidence-informed skincare and grooming advice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>Realistic expectations without miracle promises</span>
              </li>
            </ul>

            <p className="pt-3 border-t border-[#221E1A] font-editorial italic text-[18px] sm:text-[20px] text-[#DCC0A3]">
              Your appearance isn&rsquo;t one feature. It&rsquo;s the result of how
              everything comes together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
