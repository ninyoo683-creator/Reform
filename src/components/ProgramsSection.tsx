import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GuideProductCard } from './GuideProductCard';
import { ConsultationProductCard } from './ConsultationProductCard';
import { COMMON_MYTHS } from '../data/reformData';

interface ProgramsSectionProps {
  onSelectGuide: () => void;
  onSelectConsultation: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectGuide,
  onSelectConsultation,
}) => {
  return (
    <section
      id="programs"
      className="w-full bg-[#090807] border-b border-[#26221E] py-10 sm:py-12"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Two Large Product Cards Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <GuideProductCard onSelectGuide={onSelectGuide} />
          <ConsultationProductCard onSelectConsultation={onSelectConsultation} />
        </div>

        {/* COMMON LOOKSMAXXING MYTHS Section */}
        <div className="border-t border-[#26221E] pt-10">
          <div className="mb-7">
            <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.24em] text-[#DCC0A3] mb-1.5">
              COMMON LOOKSMAXXING MYTHS
            </p>
            <h2 className="font-editorial text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.1] text-[#E9D8C5] font-normal">
              Not Everything on the Internet Deserves Your Attention.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMMON_MYTHS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#100E0C] border border-[#26221E] rounded-[8px] p-5 flex flex-col justify-between space-y-3"
              >
                <p className="text-[13.5px] font-medium text-[#E9D8C5] leading-[1.45]">
                  <span className="text-[#DCC0A3] uppercase tracking-wider text-[11px] block mb-1">
                    Myth:
                  </span>
                  {item.myth}
                </p>

                <p className="text-[12.5px] text-[#B6ADA4] leading-[1.6] font-light pt-2.5 border-t border-[#1E1A16]">
                  <strong className="text-[#E9D8C5] font-medium">Reality: </strong>
                  {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* YOUR ROUTINE STARTS TODAY Block */}
        <div className="border-t border-[#26221E] pt-10">
          <div className="bg-[#100E0C] border border-[#26221E] rounded-[8px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-[640px] space-y-2.5">
              <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.24em] text-[#DCC0A3]">
                YOUR ROUTINE STARTS TODAY
              </p>
              <h2 className="font-editorial text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.1] text-[#E9D8C5] font-normal">
                You Don&rsquo;t Need to Change Everything at Once.
              </h2>
              <p className="text-[13.5px] leading-[1.6] text-[#B6ADA4] font-light">
                Start with the fundamentals. Build consistency. Improve what is
                within your control.
              </p>
              <p className="text-[13.5px] leading-[1.6] text-[#E9D8C5] font-normal">
                No miracle claims. No dangerous shortcuts. No endless product
                chasing.
              </p>
              <p className="text-[13.5px] leading-[1.6] text-[#B6ADA4] font-light">
                Just a structured approach to becoming a more polished, confident
                version of yourself.
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onSelectGuide}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[6px] bg-[#DCC0A3] hover:bg-[#E6CCB2] text-[#090807] text-[12.5px] font-semibold tracking-[0.04em] uppercase transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>EXPLORE THE GUIDE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSelectConsultation}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[6px] border border-[#3B332B] hover:border-[#DCC0A3]/60 bg-[#0E0C0A] hover:bg-[#161310] text-[#E9D8C5] text-[12.5px] font-semibold tracking-[0.04em] uppercase transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>BOOK A 1-TO-1 CALL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
