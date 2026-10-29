import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, buildWhatsAppUrl } from '../data/reformData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappHref = buildWhatsAppUrl(
    'Hi Faheem, I have a question regarding the REFORM programs.'
  );

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="w-full bg-[#070605] border-t border-[#1D1916] py-8 text-[#B6ADA4]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleLink(e, 'home')}
              className="font-editorial text-lg tracking-[0.28em] text-[#E9D8C5] uppercase block mb-1"
            >
              REFORM
            </a>
            <p className="text-[11.5px] text-[#B6ADA4]/80 font-light">
              Refine your look. Rebuild your confidence. REFORM.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-[12px]">
            <a
              href="#method"
              onClick={(e) => handleLink(e, 'method')}
              className="hover:text-[#E9D8C5] transition-colors"
            >
              The Method
            </a>
            <a
              href="#topics"
              onClick={(e) => handleLink(e, 'topics')}
              className="hover:text-[#E9D8C5] transition-colors"
            >
              Framework
            </a>
            <a
              href="#guide"
              onClick={(e) => handleLink(e, 'guide')}
              className="hover:text-[#E9D8C5] transition-colors"
            >
              &#8377;499 Guide
            </a>
            <a
              href="#consultation"
              onClick={(e) => handleLink(e, 'consultation')}
              className="hover:text-[#E9D8C5] transition-colors"
            >
              &#8377;999 Consultation
            </a>
          </div>

          {/* Direct Contact */}
          <div className="flex items-center gap-4">
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded border border-[#26221E] hover:border-[#DCC0A3] text-[#E9D8C5] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] border border-[#2E2822] hover:border-[#DCC0A3] text-[#E9D8C5] text-[12px] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#DCC0A3]" />
              <span>WhatsApp Faheem</span>
            </a>
          </div>
        </div>

        {/* Educational & Medical Boundary Notice */}
        <div className="pt-5 border-t border-[#181512] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#B6ADA4]/65 font-light leading-relaxed">
          <p className="max-w-[820px]">
            Educational content only. Individual results vary. REFORM provides
            educational self-improvement and grooming guidance, not medical,
            dermatological, or dental diagnosis or treatment.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} REFORM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
