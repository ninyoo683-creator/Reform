import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldAlert } from 'lucide-react';
import { DIGITAL_GUIDE_CHAPTERS, LEARNING_TOPICS } from '../data/reformData';

interface DigitalGuideReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalGuideReaderModal: React.FC<DigitalGuideReaderModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleDownloadFormattedEdition = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>REFORM Facial Aesthetics Guide — Digital Edition by Faheem</title>
  <style>
    body {
      font-family: Georgia, 'Times New Roman', serif;
      background: #090807;
      color: #E9D8C5;
      margin: 0;
      padding: 48px 28px;
      line-height: 1.65;
    }
    .container {
      max-width: 780px;
      margin: 0 auto;
    }
    .eyebrow {
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 11px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #DCC0A3;
    }
    h1 {
      font-size: 42px;
      font-weight: 400;
      margin: 8px 0 16px;
      color: #E9D8C5;
    }
    h2 {
      font-size: 26px;
      font-weight: 400;
      margin-top: 36px;
      margin-bottom: 6px;
      color: #E9D8C5;
      border-top: 1px solid #26221E;
      padding-top: 24px;
    }
    p, li {
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 14px;
      color: #B6ADA4;
    }
    .caution {
      background: #14110E;
      border: 1px solid #2E2822;
      padding: 14px 18px;
      border-radius: 6px;
      margin-top: 14px;
      font-size: 12.5px;
    }
    @media print {
      body { background: #ffffff; color: #111111; }
      h1, h2 { color: #000000; border-color: #dddddd; }
      p, li { color: #333333; }
      .caution { background: #f8f8f8; border-color: #cccccc; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="eyebrow">REFORM &middot; FACIAL AESTHETICS EDUCATION BY FAHEEM</div>
    <h1>REFORM Facial Aesthetics Guide</h1>
    <p>A structured, evidence-informed manual for understanding your natural features, building a resilient skincare routine, selecting face-flattering hairstyles, and maintaining sustainable grooming habits.</p>
    ${DIGITAL_GUIDE_CHAPTERS.map(
      (ch) => `
      <h2>${ch.number} — ${ch.title}</h2>
      <p><strong>${ch.subtitle}</strong></p>
      <ul>
        ${ch.keyTakeaways.map((t) => `<li>${t}</li>`).join('')}
      </ul>
      <p><strong>Execution Protocol:</strong> ${ch.protocolSummary}</p>
      <div class="caution"><strong>Safety &amp; Clinical Boundary:</strong> ${ch.cautionNote}</div>
    `
    ).join('')}
    <h2>Complete 8-Module Quick Reference</h2>
    ${LEARNING_TOPICS.map(
      (t) => `
      <p><strong>${t.index}. ${t.title} (${t.subtitle}):</strong> ${t.summary}</p>
    `
    ).join('')}
    <p style="margin-top: 48px; font-size: 12px;">&copy; REFORM by Faheem. Educational use only. Not medical or dental advice.</p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'REFORM-Facial-Aesthetics-Guide.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-reader-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[820px] max-h-[90vh] bg-[#0D0B09] border border-[#2C2620] rounded-[8px] flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <div className="px-6 py-4 bg-[#14110E] border-b border-[#26221E] flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3]">
              VERIFIED DIGITAL EDITION &middot; REFORM BY FAHEEM
            </p>
            <h2
              id="guide-reader-title"
              className="font-editorial text-[24px] sm:text-[28px] text-[#E9D8C5] font-normal"
            >
              REFORM Facial Aesthetics Guide
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownloadFormattedEdition}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] bg-[#DCC0A3] hover:bg-[#E6CCB2] text-[#090807] text-[12px] font-medium cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Guide</span>
            </button>
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[5px] border border-[#3A332C] hover:border-[#DCC0A3] text-[#E9D8C5] text-[12px] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close guide reader"
              className="p-2 rounded border border-[#2B2520] hover:border-[#DCC0A3] text-[#B6ADA4] hover:text-[#E9D8C5] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Guide Chapters */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          <div className="p-5 rounded-[6px] bg-[#13100D] border border-[#26221E]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#DCC0A3] mb-1.5">
              Author&rsquo;s Note &mdash; Faheem
            </p>
            <p className="text-[13px] leading-[1.65] text-[#B6ADA4] font-light">
              Welcome to the REFORM Facial Aesthetics Guide. This manual is built on a
              single principle: sustainable, evidence-informed refinements in skincare,
              hair framing, eyebrow upkeep, posture, and grooming outperform extreme
              internet fads every time. Take your time implementing one chapter per
              week.
            </p>
          </div>

          {DIGITAL_GUIDE_CHAPTERS.map((chapter) => (
            <section
              key={chapter.number}
              className="border-t border-[#26221E] pt-6 space-y-4"
            >
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-[#DCC0A3] mb-1">
                  {chapter.number}
                </p>
                <h3 className="font-editorial text-[26px] sm:text-[28px] text-[#E9D8C5] font-normal leading-tight">
                  {chapter.title}
                </h3>
                <p className="text-[12.5px] text-[#B6ADA4] font-light mt-0.5">
                  {chapter.subtitle}
                </p>
              </div>

              <ul className="space-y-2.5">
                {chapter.keyTakeaways.map((takeaway, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-[#E9D8C5]/90 font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded bg-[#12100E] border border-[#24201C] text-[12.5px] text-[#B6ADA4]">
                <strong className="text-[#E9D8C5] font-medium">
                  Standard Protocol:{' '}
                </strong>
                {chapter.protocolSummary}
              </div>

              <div className="flex items-start gap-2.5 text-[11.5px] text-[#B6ADA4]/85 font-light">
                <ShieldAlert className="w-4 h-4 text-[#DCC0A3] shrink-0 mt-0.5" />
                <span>{chapter.cautionNote}</span>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
