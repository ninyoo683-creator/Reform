import React, { useState } from 'react';
import { ArrowRight, LayoutGrid, GalleryHorizontal } from 'lucide-react';
import { LEARNING_TOPICS, LearningTopic } from '../data/reformData';

interface LearningTopicsProps {
  onSelectTopic: (topic: LearningTopic) => void;
}

export const LearningTopics: React.FC<LearningTopicsProps> = ({ onSelectTopic }) => {
  const [mobileLayout, setMobileLayout] = useState<'swipe' | 'grid'>('grid');

  return (
    <section
      id="topics"
      className="w-full bg-[#090807] border-b border-[#26221E] py-9 sm:py-11 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.24em] text-[#B6ADA4] mb-1.5">
                THE REFORM FRAMEWORK
              </p>
              <h2 className="font-editorial text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.08] text-[#E9D8C5] font-normal">
                Six Areas. One Complete Transformation.
              </h2>
            </div>

            {/* Mobile Layout Switcher */}
            <div className="flex sm:hidden items-center gap-1 p-1 rounded-[6px] bg-[#12100E] border border-[#26221E] shrink-0">
              <button
                type="button"
                onClick={() => setMobileLayout('swipe')}
                aria-label="Horizontal swipe view"
                className={`p-2 rounded text-[11px] flex items-center gap-1 transition-colors ${
                  mobileLayout === 'swipe'
                    ? 'bg-[#DCC0A3] text-[#090807] font-medium'
                    : 'text-[#B6ADA4]'
                }`}
              >
                <GalleryHorizontal className="w-3.5 h-3.5" />
                <span>Swipe</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileLayout('grid')}
                aria-label="Grid view"
                className={`p-2 rounded text-[11px] flex items-center gap-1 transition-colors ${
                  mobileLayout === 'grid'
                    ? 'bg-[#DCC0A3] text-[#090807] font-medium'
                    : 'text-[#B6ADA4]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Six Framework Cards */}
        <div
          className={
            mobileLayout === 'swipe'
              ? 'flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
          }
        >
          {LEARNING_TOPICS.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelectTopic(topic)}
              className={`${
                mobileLayout === 'swipe'
                  ? 'w-[280px] sm:w-auto shrink-0 snap-start'
                  : 'w-full'
              } group text-left bg-[#0E0C0A] hover:bg-[#15120F] active:scale-[0.99] border border-[#26221E] hover:border-[#DCC0A3]/45 rounded-[8px] p-4 flex flex-col justify-between transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3]`}
            >
              <div>
                {/* Close-up Photographic Thumbnail */}
                <div className="w-full h-32 rounded-[5px] overflow-hidden bg-[#161310] mb-3.5">
                  <img
                    src={topic.image}
                    alt={`${topic.index} — ${topic.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </div>

                {/* Topic Number & Name */}
                <h3 className="font-editorial text-[22px] sm:text-[24px] font-normal text-[#E9D8C5] group-hover:text-[#DCC0A3] leading-snug mb-1.5">
                  {topic.index} &mdash; {topic.title}
                </h3>

                {/* Lead sentence */}
                <p className="text-[13px] text-[#E9D8C5]/90 leading-[1.55] mb-2 font-normal">
                  {topic.subtitle}
                </p>

                {/* Supporting paragraph */}
                <p className="text-[12.5px] text-[#B6ADA4] leading-[1.58] mb-3 font-light">
                  {topic.summary.replace(topic.subtitle, '').trim()}
                </p>
              </div>

              {/* Focus Areas & Arrow */}
              <div className="pt-3 border-t border-[#1E1A16] flex items-end justify-between gap-3">
                <p className="text-[11.5px] text-[#DCC0A3]/90 leading-[1.45] font-light">
                  {topic.whatYouWillLearn[0]}
                </p>
                <ArrowRight
                  className="w-4 h-4 text-[#B6ADA4] group-hover:text-[#DCC0A3] shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
