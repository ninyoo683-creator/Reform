import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRESENTATION_STAGES } from '../data/reformData';

export const PresentationCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default centered on 02 REFINE matching screenshot scrubber
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? PRESENTATION_STAGES.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === PRESENTATION_STAGES.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 36) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  const activeStage = PRESENTATION_STAGES[activeIndex];
  const progressPositions = [16, 50, 84];
  const thumbLeftPercent = progressPositions[activeIndex] ?? 50;

  return (
    <section
      aria-label="Presentation Transformation Journey"
      className="w-full bg-[#090807] border-b border-[#26221E] py-9 sm:py-12 select-none touch-pan-y"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Eyebrow with Flanking Hairlines */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2">
          <span className="w-5 sm:w-6 h-[1px] bg-[#3A332C]" aria-hidden="true" />
          <p className="text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#B6ADA4] text-center">
            SCROLL TO SEE THE TRANSFORMATION
          </p>
          <span className="w-5 sm:w-6 h-[1px] bg-[#3A332C]" aria-hidden="true" />
        </div>

        {/* Section Heading */}
        <h2 className="font-editorial text-[28px] sm:text-[40px] lg:text-[44px] leading-[1.1] text-[#E9D8C5] text-center font-normal mb-2 [text-wrap:balance]">
          Your Features. A Refined Presentation.
        </h2>

        {/* Supporting Text */}
        <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#B6ADA4] text-center max-w-[540px] mx-auto mb-6 sm:mb-8 font-light">
          Explore how grooming, hairstyles, skincare, and presentation choices can
          influence how facial features are framed and perceived.
        </p>

        {/* Mobile Segmented Stage Tabs (< md) */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-[7px] bg-[#12100E] border border-[#26221E] mb-5 md:hidden">
          {PRESENTATION_STAGES.map((stage, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`min-h-[42px] px-2 py-1.5 rounded-[5px] text-center transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#DCC0A3] text-[#090807] font-semibold'
                    : 'text-[#B6ADA4] hover:text-[#E9D8C5]'
                }`}
              >
                <span className="block text-[10px] tabular-nums tracking-wider opacity-80">
                  {stage.id}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.12em]">
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portrait Panels: Single Active Swipeable Slide on Mobile, 3-Column Editorial Row on Desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 items-end max-w-[1120px] mx-auto">
          {PRESENTATION_STAGES.map((stage, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div
                key={stage.id}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Stage ${stage.id}: ${stage.title} — ${stage.caption}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                className={`${
                  isSelected ? 'flex' : 'hidden md:flex'
                } group relative flex-col items-center text-center cursor-pointer transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] rounded-sm p-1 sm:p-2 ${
                  isSelected ? 'opacity-100' : 'opacity-75 hover:opacity-95'
                }`}
              >
                {/* Directional Chevron Between Panels on Desktop */}
                {idx < PRESENTATION_STAGES.length - 1 && (
                  <div
                    className="hidden md:flex absolute -right-4 lg:-right-6 top-[42%] -translate-y-1/2 z-20 text-[#B6ADA4]/60 pointer-events-none"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-6 h-6" strokeWidth={1.25} />
                  </div>
                )}

                {/* Portrait Image Frame */}
                <div className="relative w-full max-w-[330px] md:max-w-[310px] h-[230px] sm:h-[240px] overflow-hidden flex items-end justify-center mb-3 rounded-[4px]">
                  <img
                    src={stage.image}
                    alt={`${stage.id} ${stage.title}: ${stage.caption}`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-top transition-transform duration-200 ${
                      isSelected
                        ? 'scale-[1.02]'
                        : 'scale-100 group-hover:scale-[1.01]'
                    }`}
                  />
                  {/* Bottom Gradient Fade into Background */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#090807] via-[#090807]/50 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Stage Number + Title */}
                <div className="flex items-baseline justify-center gap-3 mb-1">
                  <span className="text-[12px] sm:text-[13px] tabular-nums tracking-[0.12em] text-[#B6ADA4]">
                    {stage.id}
                  </span>
                  <span
                    className={`text-[12.5px] sm:text-[13.5px] uppercase tracking-[0.18em] font-medium transition-colors ${
                      isSelected ? 'text-[#DCC0A3]' : 'text-[#E9D8C5]'
                    }`}
                  >
                    {stage.title}
                  </span>
                </div>

                {/* Stage Caption */}
                <p className="text-[12.5px] text-[#B6ADA4] font-light">
                  {stage.caption}
                </p>
              </div>
            );
          })}
        </div>

        {/* Horizontal Progress Scrubber & Previous / Next Controls (44x44px hitboxes on mobile) */}
        <div className="max-w-[640px] mx-auto mt-5 sm:mt-7 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous presentation stage"
            className="w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-[#3A332C] hover:border-[#DCC0A3] active:scale-95 flex items-center justify-center text-[#B6ADA4] hover:text-[#E9D8C5] transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3]"
          >
            <ChevronLeft className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.75} />
          </button>

          {/* Interactive Track */}
          <div className="relative flex-1 h-10 flex items-center">
            <div className="w-full h-[2px] bg-[#26221E] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#DCC0A3]/70 transition-all duration-200"
                style={{ width: `${thumbLeftPercent}%` }}
              />
            </div>

            {PRESENTATION_STAGES.map((stage, idx) => {
              const stopLeft = progressPositions[idx];
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to stage ${stage.id} ${stage.title}`}
                  style={{ left: `${stopLeft}%` }}
                  className="absolute -translate-x-1/2 w-10 h-10 flex items-center justify-center cursor-pointer focus-visible:outline-none"
                >
                  <span
                    className={`rounded-full transition-all duration-200 ${
                      isCurrent
                        ? 'w-4 h-4 bg-[#DCC0A3] ring-4 ring-[#DCC0A3]/25'
                        : 'w-2.5 h-2.5 bg-[#4A4138] hover:bg-[#B6ADA4]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next presentation stage"
            className="w-10 h-10 sm:w-8 sm:h-8 rounded-full border border-[#3A332C] hover:border-[#DCC0A3] active:scale-95 flex items-center justify-center text-[#B6ADA4] hover:text-[#E9D8C5] transition-all cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3]"
          >
            <ChevronRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.75} />
          </button>
        </div>

        {/* Active Stage Educational Breakdown Strip */}
        <div className="max-w-[920px] mx-auto mt-5 sm:mt-6 pt-5 border-t border-[#1D1916] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left">
          <div className="max-w-[460px]">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#DCC0A3] mb-1">
              Stage {activeStage.id} &mdash; {activeStage.title} Focus
            </p>
            <p className="text-[12.5px] leading-[1.58] text-[#B6ADA4] font-light">
              {activeStage.summary}
            </p>
          </div>
          <ul className="space-y-1.5 text-[12px] text-[#E9D8C5]/85 font-light">
            {activeStage.adjustments.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#DCC0A3] select-none">&middot;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
