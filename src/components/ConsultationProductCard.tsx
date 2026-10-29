import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ConsultationProductCardProps {
  onSelectConsultation: () => void;
}

const CONSULTATION_INCLUDES = [
  'A 30-minute personalized consultation',
  'Discussion of your main appearance and grooming concerns',
  'Review of your current skincare and grooming routine',
  'Prioritization of practical improvements',
  'Personalized post-call recommendations',
  'A clear action plan outlining your next steps',
];

export const ConsultationProductCard: React.FC<ConsultationProductCardProps> = ({
  onSelectConsultation,
}) => {
  return (
    <article
      id="consultation"
      className="group bg-[#100E0C] border border-[#26221E] hover:border-[#DCC0A3]/35 rounded-[8px] p-4 sm:p-6 flex flex-col sm:flex-row items-stretch gap-5 sm:gap-6 transition-colors duration-200"
    >
      {/* Left Cinematic Portrait Image */}
      <div className="w-full sm:w-[225px] md:w-[240px] shrink-0 rounded-[5px] overflow-hidden bg-[#0B0A08] flex items-center justify-center">
        <img
          src="/assets/aistudio/file_00000000102c8211a71d70e53224b91c_35d12cde.png"
          alt="PERSONALIZED 1-TO-1 CONSULTATION"
          referrerPolicy="no-referrer"
          className="w-full h-auto sm:h-full object-contain object-center transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>

      {/* Right Product Copy & CTA */}
      <div className="flex-1 flex flex-col justify-between text-left py-0.5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3] mb-1.5">
            PERSONALIZED 1-TO-1 CONSULTATION
          </p>

          <h3 className="font-editorial text-[24px] sm:text-[26px] leading-[1.14] text-[#E9D8C5] font-normal mb-2.5">
            Your Goals. Your Concerns. Your Action Plan.
          </h3>

          <div className="space-y-2 text-[12.5px] sm:text-[13px] leading-[1.58] text-[#B6ADA4] font-light mb-3.5">
            <p>
              Generic advice has limits. Your routine should reflect your concerns,
              preferences, existing habits, and realistic options.
            </p>
            <p>
              The REFORM 1-to-1 consultation gives you dedicated time to discuss your
              self-improvement goals and develop a more focused plan.
            </p>
          </div>

          <p className="text-[11.5px] uppercase tracking-[0.14em] text-[#E9D8C5] font-medium mb-2">
            What&rsquo;s included:
          </p>

          <ul className="space-y-1.5 mb-4">
            {CONSULTATION_INCLUDES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-[1.45] text-[#B6ADA4] font-light"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Price */}
          <div className="flex items-baseline gap-2.5 mb-4">
            <span className="font-editorial text-[34px] sm:text-[38px] leading-none tabular-nums text-[#E9D8C5]">
              &#8377;999
            </span>
            <span className="text-[12px] text-[#B6ADA4] font-light">
              &mdash; 30-minute consultation
            </span>
          </div>

          {/* Primary CTA */}
          <div className="mb-3">
            <button
              type="button"
              onClick={onSelectConsultation}
              className="w-full sm:w-auto min-h-[48px] sm:min-h-[42px] inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-[6px] sm:rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] active:scale-[0.99] text-[#090807] text-[12.5px] font-semibold tracking-[0.04em] uppercase transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9D8C5]"
            >
              <span>BOOK YOUR CONSULTATION</span>
              <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.8} />
            </button>
          </div>

          <p className="text-[11px] leading-[1.5] text-[#B6ADA4]/75 font-light">
            Consultations provide general appearance, grooming, and self-improvement
            guidance. Medical diagnoses, prescriptions, and treatment decisions
            remain the responsibility of qualified healthcare professionals.
          </p>
        </div>
      </div>
    </article>
  );
};
