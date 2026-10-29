import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS, FAQItem } from '../data/reformData';

export const FAQAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const col1Items = FAQ_ITEMS.filter((item) => item.column === 1);
  const col2Items = FAQ_ITEMS.filter((item) => item.column === 2);

  const renderColumn = (items: FAQItem[]) => (
    <div className="divide-y divide-[#26221E] border-b border-[#26221E]">
      {items.map((item) => {
        const isOpen = Boolean(openIds[item.id]);
        return (
          <div key={item.id} className="py-1 sm:py-2">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full min-h-[48px] sm:min-h-[38px] flex items-center gap-3 text-left py-2 sm:py-1 text-[13.5px] sm:text-[13px] text-[#E9D8C5] hover:text-[#DCC0A3] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] rounded"
            >
              <span className="text-[#B6ADA4] shrink-0">
                {isOpen ? (
                  <Minus className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#DCC0A3]" strokeWidth={1.8} />
                ) : (
                  <Plus className="w-4 h-4 sm:w-3.5 sm:h-3.5" strokeWidth={1.8} />
                )}
              </span>
              <span className="font-normal leading-snug">{item.question}</span>
            </button>

            {isOpen && (
              <div className="pl-7 pr-2 pt-1 pb-3 sm:pb-1 text-[12.5px] sm:text-[12px] leading-[1.62] text-[#B6ADA4] font-light">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div id="faq" className="w-full">
      <h2 className="font-editorial text-[26px] sm:text-[30px] leading-[1.15] text-[#E9D8C5] font-normal mb-3 uppercase tracking-wide">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 items-start">
        {renderColumn(col1Items)}
        {renderColumn(col2Items)}
      </div>
    </div>
  );
};
