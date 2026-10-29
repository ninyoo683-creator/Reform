import React, { useEffect } from 'react';
import {
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { LEARNING_TOPICS, LearningTopic } from '../data/reformData';

interface TopicCurriculumDrawerProps {
  topic: LearningTopic | null;
  onClose: () => void;
  onSelectTopic: (topic: LearningTopic) => void;
  onGetGuide: () => void;
  onBookConsultation: () => void;
}

export const TopicCurriculumDrawer: React.FC<TopicCurriculumDrawerProps> = ({
  topic,
  onClose,
  onSelectTopic,
  onGetGuide,
  onBookConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (topic) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [topic, onClose]);

  if (!topic) return null;

  const currentIdx = LEARNING_TOPICS.findIndex((t) => t.id === topic.id);
  const prevTopic =
    LEARNING_TOPICS[
      currentIdx <= 0 ? LEARNING_TOPICS.length - 1 : currentIdx - 1
    ];
  const nextTopic =
    LEARNING_TOPICS[
      currentIdx >= LEARNING_TOPICS.length - 1 ? 0 : currentIdx + 1
    ];

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="topic-drawer-title"
    >
      {/* Backdrop Click to Close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Slide-Over Panel */}
      <div className="relative z-10 w-full max-w-[600px] bg-[#0D0B09] border-l border-[#26221E] h-full flex flex-col justify-between overflow-y-auto">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 bg-[#0D0B09]/95 backdrop-blur-md border-b border-[#26221E] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-[#B6ADA4]">
            <span className="text-[#DCC0A3] tabular-nums">Module {topic.index}</span>
            <span>&middot;</span>
            <span>REFORM Curriculum</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectTopic(prevTopic)}
              aria-label={`Previous topic: ${prevTopic.title}`}
              className="p-1.5 rounded border border-[#26221E] hover:border-[#DCC0A3]/50 text-[#B6ADA4] hover:text-[#E9D8C5] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onSelectTopic(nextTopic)}
              aria-label={`Next topic: ${nextTopic.title}`}
              className="p-1.5 rounded border border-[#26221E] hover:border-[#DCC0A3]/50 text-[#B6ADA4] hover:text-[#E9D8C5] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close topic curriculum drawer"
              className="ml-2 p-1.5 rounded border border-[#26221E] hover:border-[#DCC0A3] text-[#E9D8C5] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="p-6 sm:p-8 space-y-7 flex-1">
          {/* Topic Selector Pills Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 border-b border-[#1E1A16]">
            {LEARNING_TOPICS.map((item) => {
              const active = item.id === topic.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectTopic(item)}
                  className={`px-3 py-1.5 rounded text-[11.5px] whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#DCC0A3] text-[#090807] font-medium'
                      : 'bg-[#15120F] text-[#B6ADA4] hover:text-[#E9D8C5]'
                  }`}
                >
                  {item.index}. {item.title}
                </button>
              );
            })}
          </div>

          {/* Topic Header & Thumbnail */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-full sm:w-36 h-24 rounded-[6px] overflow-hidden border border-[#26221E] shrink-0">
              <img
                src={topic.image}
                alt={topic.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#DCC0A3] mb-1">
                {topic.subtitle}
              </p>
              <h2
                id="topic-drawer-title"
                className="font-editorial text-[32px] sm:text-[36px] leading-[1.08] text-[#E9D8C5] font-normal"
              >
                {topic.title}
              </h2>
            </div>
          </div>

          {/* Overview */}
          <p className="text-[13.5px] leading-[1.65] text-[#B6ADA4] font-light">
            {topic.summary}
          </p>

          {/* What You'll Learn in This Module */}
          <div className="bg-[#12100E] border border-[#26221E] rounded-[6px] p-5">
            <h3 className="text-[11.5px] uppercase tracking-[0.18em] text-[#E9D8C5] font-medium mb-3.5 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#DCC0A3]" />
              <span>Core Curriculum Points</span>
            </h3>
            <ul className="space-y-2.5">
              {topic.whatYouWillLearn.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[12.5px] leading-[1.55] text-[#B6ADA4] font-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evidence vs Internet Myth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#12100E] border border-[#26221E] rounded-[6px] p-4">
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-[#DCC0A3] mb-2 font-medium">
                Established Evidence
              </p>
              <p className="text-[12px] leading-[1.6] text-[#E9D8C5]/90 font-light">
                {topic.evidenceVsMyth.established}
              </p>
            </div>

            <div className="bg-[#12100E] border border-[#26221E] rounded-[6px] p-4">
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-[#B6ADA4] mb-2 font-medium">
                Internet Myth to Avoid
              </p>
              <p className="text-[12px] leading-[1.6] text-[#B6ADA4] font-light">
                {topic.evidenceVsMyth.mythToAvoid}
              </p>
            </div>
          </div>

          {/* Practical Action Protocol */}
          <div>
            <h3 className="text-[11.5px] uppercase tracking-[0.18em] text-[#E9D8C5] font-medium mb-3">
              Practical REFORM Protocol
            </h3>
            <ol className="space-y-2.5">
              {topic.practicalProtocol.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[12.5px] leading-[1.55] text-[#B6ADA4] font-light"
                >
                  <span className="text-[#DCC0A3] font-mono text-[11px] tabular-nums mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Safety & Professional Boundary Note */}
          <div className="bg-[#14110E] border border-[#2F2821] rounded-[6px] p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
            <div className="text-[11.5px] leading-[1.55] text-[#B6ADA4] font-light">
              <strong className="text-[#E9D8C5] font-medium block mb-0.5">
                Safety &amp; Realistic Expectations
              </strong>
              {topic.safetyDisclaimer}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Conversion Bar */}
        <div className="sticky bottom-0 z-20 bg-[#0D0B09]/95 backdrop-blur-md border-t border-[#26221E] px-6 py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-[12px] text-[#B6ADA4]">
            <span className="text-[#E9D8C5] font-medium">Want the complete protocol?</span>{' '}
            Included in the &#8377;499 Guide.
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                onGetGuide();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] text-[#090807] text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Get &#8377;499 Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[5px] border border-[#3A332C] hover:border-[#DCC0A3]/60 text-[#E9D8C5] text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Book &#8377;999 Call</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
