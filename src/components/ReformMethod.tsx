import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { REFORM_METHOD_PRINCIPLES } from '../data/reformData';

export const ReformMethod: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section
      id="method"
      className="relative w-full bg-[#090807] border-b border-[#26221E] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 py-8 lg:py-10">
          {/* Left Column: Classical Sculpture + Eyebrow & Heading */}
          <div className="lg:col-span-4 flex items-center gap-4 sm:gap-6">
            <div className="relative w-24 sm:w-32 lg:w-36 h-28 sm:h-36 lg:h-[156px] shrink-0 -ml-4 sm:ml-0 overflow-hidden flex items-end">
              <img
                src="/assets/reform/method-sculpture.png"
                alt="Classical monochrome sculpture bust symbolizing proportion and study"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-left-bottom opacity-90 select-none"
              />
              <div
                className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#090807] to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <div className="py-1">
              <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.22em] sm:tracking-[0.24em] text-[#B6ADA4] mb-1.5">
                THE REFORM METHOD
              </p>
              <h2 className="font-editorial text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.12] text-[#E9D8C5] font-normal">
                A System, Not Another Internet Trend.
              </h2>
            </div>
          </div>

          {/* Right Column: 01 Assess -> 02 Prioritize -> 03 Build -> 04 Track -> 05 Refine */}
          <div className="lg:col-span-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 items-stretch">
              {REFORM_METHOD_PRINCIPLES.map((item, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={`${item.letter}-${idx}`}
                    type="button"
                    onClick={() => setSelectedIdx(isSelected ? null : idx)}
                    className={`group relative flex flex-col items-start text-left p-3.5 rounded-[6px] border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] ${
                      isSelected
                        ? 'bg-[#15120F] border-[#DCC0A3]/55'
                        : 'bg-[#0E0C0A] border-[#221E1A] hover:border-[#DCC0A3]/35'
                    }`}
                  >
                    {/* Subtle Directional Arrow Between Steps on Desktop */}
                    {idx < REFORM_METHOD_PRINCIPLES.length - 1 && (
                      <ArrowRight
                        className="hidden md:block absolute -right-2.5 top-4 w-3 h-3 text-[#B6ADA4]/45 pointer-events-none z-10"
                        strokeWidth={1.5}
                      />
                    )}

                    <span className="font-editorial text-[22px] text-[#DCC0A3] leading-none mb-1.5">
                      {item.letter} &mdash; {item.word}
                    </span>

                    <p className="text-[12px] leading-[1.5] text-[#B6ADA4] font-light">
                      {item.detail}
                    </p>
                  </button>
                );
              })}
            </div>

            <p className="text-[13.5px] sm:text-[14px] text-[#E9D8C5] font-editorial italic tracking-wide text-center md:text-right">
              The objective isn&rsquo;t perfection. It&rsquo;s measurable,
              sustainable progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
