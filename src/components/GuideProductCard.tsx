import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface GuideProductCardProps {
  onSelectGuide: () => void;
}

const GUIDE_ITEMS = [
  'The fundamentals of facial aesthetics',
  'How to establish a simple skincare routine',
  'Haircuts, styling, and haircare fundamentals',
  'Eyebrow and facial grooming techniques',
  'Teeth, smile, and oral hygiene basics',
  'Clothing, hygiene, and personal presentation',
  'Common online myths and mistakes to avoid',
  'A practical routine-building checklist',
  'A progress-tracking framework',
];

export const GuideProductCard: React.FC<GuideProductCardProps> = ({
  onSelectGuide,
}) => {
  return (
    <article
      id="guide"
      className="group bg-[#100E0C] border border-[#26221E] hover:border-[#DCC0A3]/35 rounded-[8px] p-4 sm:p-6 flex flex-col sm:flex-row items-stretch gap-5 sm:gap-6 transition-colors duration-200"
    >
      {/* Left Book Mockup Image */}
      <div className="w-full sm:w-[215px] md:w-[225px] shrink-0 rounded-[5px] overflow-hidden bg-[#0B0A08] flex items-center justify-center">
        <img
          src="/assets/aistudio/IMG_20261029_212500_8eba582d.png"
          alt="THE REFORM GLOW-UP GUIDE"
          referrerPolicy="no-referrer"
          className="w-full h-[220px] sm:h-full object-cover object-center transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>

      {/* Right Product Copy & CTA */}
      <div className="flex-1 flex flex-col justify-between text-left py-0.5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3] mb-1.5">
            THE REFORM GLOW-UP GUIDE
          </p>

          <h3 className="font-editorial text-[24px] sm:text-[26px] leading-[1.14] text-[#E9D8C5] font-normal mb-2.5">
            Your Personal Roadmap to Better Grooming and Facial Aesthetics
          </h3>

          <p className="text-[12.5px] sm:text-[13px] leading-[1.58] text-[#B6ADA4] font-light mb-3.5">
            A structured digital guide for men who want to stop piecing together
            conflicting advice and start following a clear routine.
          </p>

          <p className="text-[11.5px] uppercase tracking-[0.14em] text-[#E9D8C5] font-medium mb-2">
            Inside the guide:
          </p>

          <ul className="space-y-1.5 mb-4">
            {GUIDE_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-[1.45] text-[#B6ADA4] font-light"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[12.5px] text-[#E9D8C5] font-medium mb-4">
            Designed for beginners. Built for consistency.
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-baseline gap-2.5 mb-4">
            <span className="font-editorial text-[34px] sm:text-[38px] leading-none tabular-nums text-[#E9D8C5]">
              &#8377;499
            </span>
            <span className="text-[12px] text-[#B6ADA4] font-light">
              &mdash; One-time purchase
            </span>
          </div>

          {/* Primary CTA */}
          <div className="mb-3">
            <button
              type="button"
              onClick={onSelectGuide}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[42px] inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-[6px] sm:rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] active:scale-[0.99] text-[#090807] text-[12.5px] font-semibold tracking-[0.04em] uppercase transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9D8C5]"
            >
              <span>GET THE REFORM GUIDE</span>
              <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.8} />
            </button>
          </div>

          <p className="text-[11px] leading-[1.5] text-[#B6ADA4]/75 font-light">
            Educational content only. Individual results vary. The guide does not
            replace professional medical, dermatological, or dental care.
          </p>
        </div>
      </div>
    </article>
  );
};
