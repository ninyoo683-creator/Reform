import React, { useState, useEffect } from 'react';
import { Instagram, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, buildWhatsAppUrl } from '../data/reformData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'method', label: 'The Method' },
  { id: 'guide', label: 'Guide' },
  { id: 'consultation', label: 'Consultation' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappHref = buildWhatsAppUrl(
    'Hi Faheem, I visited the REFORM website and would like to learn more about your facial aesthetics programs.'
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b border-[#24201C] ${
        scrolled ? 'bg-[#090807]/95 backdrop-blur-md' : 'bg-[#090807]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-14 md:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="font-editorial text-lg sm:text-xl md:text-2xl tracking-[0.28em] text-[#E9D8C5] uppercase whitespace-nowrap shrink-0 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3]"
          aria-label="REFORM Home"
        >
          REFORM
        </a>

        {/* Zone 2: Center Navigation Links (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Primary Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-1.5 text-[13px] tracking-[0.03em] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] ${
                  isActive
                    ? 'text-[#E9D8C5] font-medium'
                    : 'text-[#B6ADA4] hover:text-[#E9D8C5]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-[1px] h-[1.5px] bg-[#E9D8C5] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Right Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow REFORM on Instagram"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center text-[#E9D8C5]/85 hover:text-[#DCC0A3] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] rounded"
          >
            <Instagram className="w-[18px] h-[18px]" strokeWidth={1.7} />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[5px] bg-[#DCC0A3] hover:bg-[#E5CCB2] text-[#090807] text-[12.5px] font-medium tracking-[0.01em] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9D8C5]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#090807]/10" strokeWidth={2} />
            <span>Talk to Faheem</span>
          </a>
        </div>

        {/* Mobile Right Controls (44x44px ergonomic touch targets) */}
        <div className="flex items-center gap-1.5 md:hidden">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-[5px] bg-[#DCC0A3] active:scale-[0.98] text-[#090807] text-[11.5px] font-medium tracking-[0.01em] whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Talk to Faheem</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#E9D8C5] hover:text-[#DCC0A3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DCC0A3] rounded"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E0C0A]/98 backdrop-blur-lg border-b border-[#26221E] px-4 pt-2 pb-5 space-y-3 shadow-2xl">
          <nav className="grid grid-cols-2 gap-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`min-h-[44px] px-3.5 rounded-[6px] flex items-center text-[13.5px] tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#191512] border border-[#DCC0A3]/40 text-[#DCC0A3] font-medium'
                      : 'bg-[#12100E] border border-[#221E1A] text-[#B6ADA4] hover:text-[#E9D8C5]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-1 flex items-center gap-2.5">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-4 rounded-[6px] bg-[#DCC0A3] text-[#090807] text-[13px] font-semibold tracking-wide"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Faheem on WhatsApp</span>
            </a>

            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="REFORM Instagram"
              className="min-w-[46px] min-h-[46px] rounded-[6px] border border-[#2E2822] bg-[#14110E] flex items-center justify-center text-[#E9D8C5] hover:text-[#DCC0A3]"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
