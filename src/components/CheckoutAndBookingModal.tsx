import React, { useState, useEffect } from 'react';
import {
  X,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import {
  BRAND_CONFIG,
  CONSULTATION_FOCUS_OPTIONS,
  CONSULTATION_TIME_SLOTS,
  buildWhatsAppUrl,
} from '../data/reformData';

export type CheckoutModalMode = 'guide' | 'consultation' | null;

interface CheckoutAndBookingModalProps {
  mode: CheckoutModalMode;
  onClose: () => void;
  onSwitchMode: (mode: CheckoutModalMode) => void;
}

interface CreatedOrder {
  orderId: string;
  productType: 'guide' | 'consultation';
  productTitle: string;
  amountInr: 499 | 999;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  focusAreas?: string[];
  notes?: string;
}

export const CheckoutAndBookingModal: React.FC<CheckoutAndBookingModalProps> = ({
  mode,
  onClose,
  onSwitchMode,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState(
    CONSULTATION_TIME_SLOTS[2]
  );
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([
    '01 — Skin Optimization',
    '02 — Hair Optimization',
  ]);
  const [notes, setNotes] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [createdOrder, setCreatedOrder] = useState<CreatedOrder | null>(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  useEffect(() => {
    setErrorMsg(null);
    setCreatedOrder(null);
  }, [mode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (mode) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, onClose]);

  if (!mode) return null;

  const toggleFocusArea = (area: string) => {
    setSelectedFocusAreas((prev) =>
      prev.includes(area) ? prev.filter((item) => item !== area) : [...prev, area]
    );
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const productType = mode === 'consultation' ? 'consultation' : 'guide';
    setSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType,
          customerName,
          customerEmail,
          customerPhone,
          preferredDate: productType === 'consultation' ? preferredDate : undefined,
          preferredTimeSlot:
            productType === 'consultation' ? preferredTimeSlot : undefined,
          focusAreas:
            productType === 'consultation' ? selectedFocusAreas : undefined,
          notes,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(
          data.error || 'Could not process your request. Please check your details.'
        );
        setSubmitting(false);
        return;
      }

      setCreatedOrder(data.order);
    } catch {
      setErrorMsg('Network error while registering your order. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getWhatsAppCheckoutUrl = (order: CreatedOrder) => {
    if (order.productType === 'guide') {
      const msg = [
        `Hi Faheem, I would like to purchase *THE REFORM GLOW-UP GUIDE (₹499)*.`,
        ``,
        `*Order Reference:* ${order.orderId}`,
        `*Name:* ${order.customerName}`,
        `*Email:* ${order.customerEmail}`,
        `*Phone:* ${order.customerPhone}`,
        ``,
        `Please share the payment details so I can complete the ₹499 payment and receive the guide.`,
      ].join('\n');
      return buildWhatsAppUrl(msg);
    } else {
      const focusStr =
        order.focusAreas && order.focusAreas.length > 0
          ? order.focusAreas.join(', ')
          : 'General Facial Aesthetics & Grooming';
      const msg = [
        `Hi Faheem, I would like to book the *REFORM 1-to-1 Consultation (₹999 — 30-Minute Consultation)*.`,
        ``,
        `*Booking Reference:* ${order.orderId}`,
        `*Name:* ${order.customerName}`,
        `*Email:* ${order.customerEmail}`,
        `*WhatsApp:* ${order.customerPhone}`,
        `*Preferred Date:* ${order.preferredDate}`,
        `*Preferred Time Window:* ${order.preferredTimeSlot}`,
        `*Primary Focus Areas:* ${focusStr}`,
        order.notes ? `*Additional Notes:* ${order.notes}` : '',
        ``,
        `Please confirm slot availability and share the ₹999 payment details.`,
      ]
        .filter(Boolean)
        .join('\n');
      return buildWhatsAppUrl(msg);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Bottom Sheet on Mobile, Centered Modal on Desktop */}
      <div className="relative z-10 w-full max-w-[540px] max-h-[92dvh] sm:max-h-none overflow-y-auto bg-[#0F0D0B] border-t sm:border border-[#2B2520] rounded-t-2xl sm:rounded-[8px] my-0 sm:my-auto">
        {/* Mobile Grab Handle */}
        <div className="sm:hidden pt-2.5 pb-1 bg-[#14110E] flex justify-center">
          <div className="w-10 h-1 rounded-full bg-[#3A322B]" />
        </div>

        {/* Top Header */}
        <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#14110E] border-b border-[#26221E] flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#DCC0A3]">
              {mode === 'guide' && 'WHATSAPP ORDER · ₹499'}
              {mode === 'consultation' && '1-TO-1 CONSULTATION BOOKING · ₹999'}
            </p>
            <h2
              id="checkout-modal-title"
              className="font-editorial text-[22px] sm:text-[26px] leading-tight text-[#E9D8C5] font-normal"
            >
              {mode === 'guide' && 'THE REFORM GLOW-UP GUIDE'}
              {mode === 'consultation' && 'Personalized 1-to-1 Consultation'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded border border-[#2B2520] hover:border-[#DCC0A3] text-[#B6ADA4] hover:text-[#E9D8C5] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mode Switch Tabs */}
        <div className="px-5 sm:px-6 pt-2.5 bg-[#120F0D] border-b border-[#24201C] flex items-center gap-5 text-[12px]">
          <button
            type="button"
            onClick={() => onSwitchMode('guide')}
            className={`min-h-[38px] pb-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              mode === 'guide'
                ? 'border-[#DCC0A3] text-[#E9D8C5] font-medium'
                : 'border-transparent text-[#B6ADA4] hover:text-[#E9D8C5]'
            }`}
          >
            &#8377;499 Glow-Up Guide
          </button>
          <button
            type="button"
            onClick={() => onSwitchMode('consultation')}
            className={`min-h-[38px] pb-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              mode === 'consultation'
                ? 'border-[#DCC0A3] text-[#E9D8C5] font-medium'
                : 'border-transparent text-[#B6ADA4] hover:text-[#E9D8C5]'
            }`}
          >
            &#8377;999 1-to-1 Consultation
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="p-5 sm:p-6">
          {createdOrder ? (
            /* Step 2: Order Registered -> WhatsApp Ordering Handoff */
            <div className="space-y-5">
              <div className="p-4 rounded-[6px] bg-[#15120F] border border-[#332C25] flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-[#DCC0A3] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#DCC0A3] mb-0.5">
                    Order Registered &middot; {createdOrder.orderId}
                  </p>
                  <h3 className="text-[15px] font-medium text-[#E9D8C5] mb-1">
                    {createdOrder.productType === 'guide'
                      ? 'Complete Your ₹499 Guide Order on WhatsApp'
                      : 'Confirm Your 30-Minute Slot & ₹999 Booking on WhatsApp'}
                  </h3>
                  <p className="text-[12px] leading-[1.55] text-[#B6ADA4] font-light">
                    {createdOrder.productType === 'guide'
                      ? 'Tap the button below to message Faheem on WhatsApp with your pre-filled order details to complete payment and receive your digital guide directly.'
                      : 'Tap below to send your preferred consultation date, time window, and focus areas directly to Faheem on WhatsApp to finalize your appointment and ₹999 payment.'}
                  </p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="bg-[#12100E] border border-[#26221E] rounded-[6px] p-4 space-y-2 text-[12px]">
                <div className="flex justify-between py-1 border-b border-[#1E1A16]">
                  <span className="text-[#B6ADA4]">Reference ID</span>
                  <span className="text-[#E9D8C5] font-mono tabular-nums">
                    {createdOrder.orderId}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1E1A16]">
                  <span className="text-[#B6ADA4]">Program</span>
                  <span className="text-[#E9D8C5] font-medium">
                    {createdOrder.productType === 'guide'
                      ? 'THE REFORM GLOW-UP GUIDE'
                      : '30-Min 1-to-1 Consultation'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1E1A16]">
                  <span className="text-[#B6ADA4]">Amount Payable</span>
                  <span className="text-[#DCC0A3] font-semibold tabular-nums">
                    &#8377;{createdOrder.amountInr}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1E1A16]">
                  <span className="text-[#B6ADA4]">Customer</span>
                  <span className="text-[#E9D8C5]">
                    {createdOrder.customerName} ({createdOrder.customerPhone})
                  </span>
                </div>
                {createdOrder.preferredDate && (
                  <div className="flex justify-between py-1">
                    <span className="text-[#B6ADA4]">Requested Slot</span>
                    <span className="text-[#E9D8C5] tabular-nums">
                      {createdOrder.preferredDate} &middot;{' '}
                      {createdOrder.preferredTimeSlot}
                    </span>
                  </div>
                )}
              </div>

              {/* Primary WhatsApp Action */}
              <div>
                <a
                  href={getWhatsAppCheckoutUrl(createdOrder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[6px] bg-[#DCC0A3] hover:bg-[#E6CCB2] text-[#090807] text-[13.5px] font-semibold tracking-wide transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {createdOrder.productType === 'guide'
                      ? 'Order ₹499 Guide on WhatsApp'
                      : 'Book ₹999 Consultation on WhatsApp'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            /* Step 1: Intake Form */
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded bg-[#241412] border border-[#5C2B25] text-[#F2B8B5] text-[12px] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Summary Strip */}
              <div className="p-3.5 rounded-[6px] bg-[#14110E] border border-[#26221E] flex items-center justify-between gap-3">
                <div>
                  <p className="text-[12.5px] font-medium text-[#E9D8C5]">
                    {mode === 'guide'
                      ? 'One-Time Digital Guide Purchase'
                      : '30-Minute Personalized Consultation'}
                  </p>
                  <p className="text-[11px] text-[#B6ADA4] font-light">
                    {mode === 'guide'
                      ? 'Direct WhatsApp ordering & delivery with Faheem'
                      : 'WhatsApp-assisted scheduling & payment with Faheem'}
                  </p>
                </div>
                <span className="font-editorial text-[28px] text-[#DCC0A3] tabular-nums shrink-0">
                  &#8377;
                  {mode === 'guide'
                    ? BRAND_CONFIG.guidePriceInr
                    : BRAND_CONFIG.consultationPriceInr}
                </span>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[13px] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkout-phone"
                    className="block text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full min-h-[44px] px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[13px] tabular-nums focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="checkout-email"
                  className="block text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[13px] focus:outline-none"
                />
              </div>

              {/* Consultation-Specific Scheduling Fields */}
              {mode === 'consultation' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                      <label
                        htmlFor="consult-date"
                        className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#DCC0A3]" />
                        <span>Preferred Date *</span>
                      </label>
                      <input
                        id="consult-date"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[13px] tabular-nums focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="consult-slot"
                        className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#DCC0A3]" />
                        <span>Preferred 30-Min Window *</span>
                      </label>
                      <select
                        id="consult-slot"
                        value={preferredTimeSlot}
                        onChange={(e) => setPreferredTimeSlot(e.target.value)}
                        className="w-full min-h-[44px] px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[13px] focus:outline-none"
                      >
                        {CONSULTATION_TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#161310]">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Primary Focus Selector */}
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-2">
                      Topics to Cover During Your Session
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CONSULTATION_FOCUS_OPTIONS.map((option) => {
                        const selected = selectedFocusAreas.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleFocusArea(option)}
                            className={`min-h-[38px] px-3 py-1.5 rounded-[5px] text-[12px] border transition-colors cursor-pointer ${
                              selected
                                ? 'bg-[#DCC0A3]/15 border-[#DCC0A3] text-[#E9D8C5]'
                                : 'bg-[#14110E] border-[#2B2520] text-[#B6ADA4] hover:text-[#E9D8C5]'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="consult-notes"
                      className="block text-[11px] uppercase tracking-[0.14em] text-[#B6ADA4] mb-1.5"
                    >
                      Current Routine or Questions (Optional)
                    </label>
                    <textarea
                      id="consult-notes"
                      rows={2}
                      placeholder="Briefly share your skin type, hairstyle goals, or specific questions for Faheem..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-[6px] bg-[#161310] border border-[#2E2822] focus:border-[#DCC0A3] text-[#E9D8C5] text-base sm:text-[12.5px] focus:outline-none resize-none"
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <p className="text-[11px] text-[#B6ADA4]/80 font-light text-center sm:text-left">
                  Complete your order directly with Faheem on WhatsApp.
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto min-h-[48px] sm:min-h-[42px] inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-[6px] bg-[#DCC0A3] hover:bg-[#E6CCB2] text-[#090807] text-[13.5px] sm:text-[12.5px] font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Preparing Order...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      <span>
                        {mode === 'guide'
                          ? 'Continue to WhatsApp Order'
                          : 'Continue to WhatsApp Booking'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
